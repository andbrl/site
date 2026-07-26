module.exports = function (config) {
    config.addPassthroughCopy("./src/assets");
    config.addWatchTarget("./src/css/");

    config.addPassthroughCopy("./src/css/");
    config.addWatchTarget("./src/css/");

    config.addPreprocessor("drafts", "*", (data, content) => {
        // exlude drafts from being processed on publishing.
        if (data.draft && process.env.ELEVENTY_RUN_MODE == "build") {
            return false;
        }
    });

    config.addCollection("nav", (collectionApi) => {
      return collectionApi.getAll()
        .filter(item => item.data.nav)
        .sort((a, b) => a.data.nav.order - b.data.nav.order);
    });

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}
