const buildDatas = (args) => {
  var datas = "";

  if (args.length > 0) {
    args.forEach(item => {
      let [key, ...values] = item.split("=");
      let value = values.join("=");
      if (!value) {
        datas += `data-${key} `
      } else {
        datas += `data-${key}='${value}' `;
      }
    });
  }

  return datas;
}

const buildDatasObj = (args, defaultObj = {}) => {
  let params = {};

  if (args.length > 0) {
    args.forEach(item => {
      let kv = item.split("=");
      params[kv[0]] = kv[1];
    });
  }

  return Object.assign({}, defaultObj, params);
}

/**
 * image tag
 *
 * Syntax:
 *   {% image { url title? width? height? } %}
 */
hexo.extend.tag.register("image", function(args) {
  let datas = buildDatasObj(args, { title: "", width: "100%", height: "100%" });

  if (!datas.url) return "";

  return `
    <figure class="figure-image">
      <img src="${datas.url}" alt="${datas.title}" width="${datas.width}" height="${datas.height} loading="lazy" />
      <figcaption>${datas.title}</figcaption>
    </figure>
  `;
});

/**
 * aplayer tag
 *
 * Syntax:
 *   {% aplayer %}
 */
hexo.extend.tag.register("aplayer", function(args) {
  let datas = buildDatas(args);
  return `<div class="aplayer-box" ${datas}></div>`;
});

/**
 * dplayer tag
 *
 * Syntax:
 *   {% dplayer {url cover? subtitle?} %}
 */
hexo.extend.tag.register("dplayer", function(args) {
  let datas = buildDatas(args);
  return `<div class="dplayer-box" ${datas}></div>`;
});