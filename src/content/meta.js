module.exports = {
  title: "Enchanté, Julien Pradet",
  description: `Je suis un agglomérat de plein de choses. Je fais de l'illustration, de la 3D (surtout de la sculpture) et un peu de graphisme. Mais je suis surtout un furieux optimiste qui a envie de partager avec les autres.`,
  layout: "Blog",
  isHome: true,
  removeFromSitemap: true,
  removeTitle: true,
  filter: page => typeof page.isPublic === "undefined" || page.isPublic
};
