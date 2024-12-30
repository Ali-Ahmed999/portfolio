"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ExportedAppPageFiles: null,
    exportAppPage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ExportedAppPageFiles: function() {
        return ExportedAppPageFiles;
    },
    exportAppPage: function() {
        return exportAppPage;
    }
});
const _approuterheaders = require("../../client/components/app-router-headers");
const _isdynamicusageerror = require("../helpers/is-dynamic-usage-error");
const _constants = require("../../lib/constants");
const _ciinfo = require("../../telemetry/ci-info");
const _modulerender = require("../../server/future/route-modules/app-page/module.render");
var ExportedAppPageFiles;
(function(ExportedAppPageFiles) {
    ExportedAppPageFiles["HTML"] = "HTML";
    ExportedAppPageFiles["FLIGHT"] = "FLIGHT";
    ExportedAppPageFiles["META"] = "META";
    ExportedAppPageFiles["POSTPONED"] = "POSTPONED";
})(ExportedAppPageFiles || (ExportedAppPageFiles = {}));
async function generatePrefetchRsc(req, path, res, pathname, htmlFilepath, renderOpts, fileWriter) {
    // When we're in PPR, the RSC payload is emitted as the prefetch payload, so
    // attempting to generate a prefetch RSC is an error.
    if (renderOpts.experimental.ppr) {
        throw new Error("Invariant: explicit prefetch RSC cannot be generated with PPR enabled");
    }
    req.headers[_approuterheaders.RSC_HEADER.toLowerCase()] = "1";
    req.headers[_approuterheaders.NEXT_URL.toLowerCase()] = path;
    req.headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER.toLowerCase()] = "1";
    renderOpts.supportsDynamicHTML = true;
    renderOpts.isPrefetch = true;
    delete renderOpts.isRevalidate;
    const prefetchRenderResult = await (0, _modulerender.lazyRenderAppPage)(req, res, pathname, {}, renderOpts);
    const prefetchRscData = await prefetchRenderResult.toUnchunkedString(true);
    if (renderOpts.store.staticPrefetchBailout) return;
    await fileWriter("FLIGHT", htmlFilepath.replace(/\.html$/, _constants.RSC_PREFETCH_SUFFIX), prefetchRscData);
}
async function exportAppPage(req, res, page, path, pathname, query, renderOpts, htmlFilepath, debugOutput, isDynamicError, isAppPrefetch, fileWriter) {
    // If the page is `/_not-found`, then we should update the page to be `/404`.
    if (page === "/_not-found") {
        pathname = "/404";
    }
    try {
        if (isAppPrefetch) {
            await generatePrefetchRsc(req, path, res, pathname, htmlFilepath, renderOpts, fileWriter);
            return {
                revalidate: 0
            };
        }
        const result = await (0, _modulerender.lazyRenderAppPage)(req, res, pathname, query, renderOpts);
        const html = result.toUnchunkedString();
        const { metadata: { pageData, revalidate = false, postponed, fetchTags } } = result;
        const { metadata } = result;
        // Ensure we don't postpone without having PPR enabled.
        if (postponed && !renderOpts.experimental.ppr) {
            throw new Error("Invariant: page postponed without PPR being enabled");
        }
        if (revalidate === 0) {
            if (isDynamicError) {
                throw new Error(`Page with dynamic = "error" encountered dynamic data method on ${path}.`);
            }
            if (!renderOpts.store.staticPrefetchBailout) {
                await generatePrefetchRsc(req, path, res, pathname, htmlFilepath, renderOpts, fileWriter);
            }
            const { staticBailoutInfo = {} } = metadata;
            if (revalidate === 0 && debugOutput && (staticBailoutInfo == null ? void 0 : staticBailoutInfo.description)) {
                const err = new Error(`Static generation failed due to dynamic usage on ${path}, reason: ${staticBailoutInfo.description}`);
                // Update the stack if it was provided via the bailout info.
                const { stack } = staticBailoutInfo;
                if (stack) {
                    err.stack = err.message + stack.substring(stack.indexOf("\n"));
                }
                console.warn(err);
            }
            return {
                revalidate: 0
            };
        } else if (renderOpts.experimental.ppr) {
            // If PPR is enabled, we should emit the flight data as the prefetch
            // payload.
            await fileWriter("FLIGHT", htmlFilepath.replace(/\.html$/, _constants.RSC_PREFETCH_SUFFIX), pageData);
        } else {
            // Writing the RSC payload to a file if we don't have PPR enabled.
            await fileWriter("FLIGHT", htmlFilepath.replace(/\.html$/, _constants.RSC_SUFFIX), pageData);
        }
        const headers = {
            ...metadata.headers
        };
        if (fetchTags) {
            headers[_constants.NEXT_CACHE_TAGS_HEADER] = fetchTags;
        }
        // Writing static HTML to a file.
        await fileWriter("HTML", htmlFilepath, html ?? "", "utf8");
        // Writing the request metadata to a file.
        const meta = {
            status: undefined,
            headers,
            postponed
        };
        await fileWriter("META", htmlFilepath.replace(/\.html$/, _constants.NEXT_META_SUFFIX), JSON.stringify(meta, null, 2));
        return {
            // Only include the metadata if the environment has next support.
            metadata: _ciinfo.hasNextSupport ? meta : undefined,
            hasEmptyPrelude: Boolean(postponed) && html === "",
            hasPostponed: Boolean(postponed),
            revalidate
        };
    } catch (err) {
        if (!(0, _isdynamicusageerror.isDynamicUsageError)(err)) {
            throw err;
        }
        return {
            revalidate: 0
        };
    }
}

//# sourceMappingURL=app-page.js.map