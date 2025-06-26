import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "es-ES",
  cleanUrls: true,
  base: "/",

  vite: {
    plugins: [UnoCSS()],
  },

  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-frappe",
    },
    math: true,
  },

  title: "Improbabilidades",
  description: "Curso introductorio de probabilidad para ingeniería",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      },
    ],
    ["link", { rel: "icon", href: "/d_icon.png" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/d.png",
    nav: [
      { text: "Inicio", link: "/" },
      {
        text: "Temas",
        items: [
          {
            text: "La probabilidad",
            link: "/probabilidad/",
          },
          {
            text: "Variables aleatorias",
            link: "/variables-aleatorias/",
          },
          {
            text: "Vectores aleatorios",
            link: "/vectores-aleatorios/",
          },
          {
            text: "Procesos aleatorios",
            link: "/procesos-aleatorios/",
          },
          {
            text: "Cadenas de Markov",
            link: "/cadenas-markov/",
          },
        ],
      },
      {
        text: "Programación",
        items: [
          {
            text: "PyX",
            link: "/programacion/pyx",
          },
          {
            text: "Proyectos",
            link: "/programacion/proyectos",
          },
        ],
      },
      { text: "Sobre el proyecto", link: "/proyecto" },
    ],

    sidebar: [
      {
        text: "La probabilidad",
        collapsed: true,
        items: [
          {
            text: "Introducción",
            link: "/probabilidad/",
          },
          {
            text: "Teoría de conjuntos",
            link: "/probabilidad/teoria-de-conjuntos",
          },
          {
            text: "Análisis combinatorio",
            link: "/probabilidad/analisis-combinatorio",
          },
          {
            text: "Definiciones de la probabilidad",
            link: "/probabilidad/definicion",
          },
          {
            text: "Probabilidad conjunta y condicional",
            link: "/probabilidad/conjunta-y-condicional",
          },
          { text: "Teorema de Bayes", link: "/probabilidad/teorema-de-bayes" },
          {
            text: "Eventos independientes",
            link: "/probabilidad/eventos-independientes",
          },
          {
            text: "Pruebas de Bernoulli",
            link: "/probabilidad/pruebas-de-bernoulli",
          },
        ],
      },
      {
        text: "Variables aleatorias",
        collapsed: true,
        items: [
          {
            text: "Introducción",
            link: "/variables-aleatorias/",
          },
          {
            text: "Funciones de distribución",
            collapsed: true,
            items: [
              {
                text: "Introducción",
                link: "/variables-aleatorias/funciones-de-distribucion/",
              },
              {
                text: "Acumulativa (CDF)",
                link: "/variables-aleatorias/funciones-de-distribucion/acumulativa",
              },
              {
                text: "Densidad (PDF)",
                link: "/variables-aleatorias/funciones-de-distribucion/densidad",
              },
              {
                text: "Condicionales",
                link: "/variables-aleatorias/funciones-de-distribucion/condicionales",
              },
            ],
          },
          {
            text: "Momentos",
            collapsed: true,
            items: [
              {
                text: "Introducción",
                link: "/variables-aleatorias/momentos/",
              },
              {
                text: "Media",
                link: "/variables-aleatorias/momentos/media",
              },
              {
                text: "Varianza",
                link: "/variables-aleatorias/momentos/varianza",
              },
              {
                text: "Sesgo",
                link: "/variables-aleatorias/momentos/sesgo",
              },
              {
                text: "Kurtosis",
                link: "/variables-aleatorias/momentos/kurtosis",
              },
              {
                text: "Funciones que dan momentos",
                link: "/variables-aleatorias/momentos/funciones",
              },
            ],
          },
          {
            text: "Transformaciones",
            collapsed: true,
            items: [
              {
                text: "Introducción",
                link: "/variables-aleatorias/transformaciones/",
              },
              {
                text: "Monotónicas",
                link: "/variables-aleatorias/transformaciones/monotonicas",
              },
              {
                text: "No monotónicas",
                link: "/variables-aleatorias/transformaciones/no-monotonicas",
              },
            ],
          },
        ],
      },
      {
        text: "Vectores aleatorios",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/vectores-aleatorios/" },
          { text: "Momentos", link: "/vectores-aleatorios/momentos" },
          {
            text: "Transformaciones",
            link: "/vectores-aleatorios/transformaciones",
          },
          {
            text: "Teorema del límite central",
            link: "/vectores-aleatorios/teorema-del-limite-central",
          },
        ],
      },
      {
        text: "Procesos aleatorios",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/procesos-aleatorios/" },
          {
            text: "Estacionaridad",
            link: "/procesos-aleatorios/estacionaridad",
          },
          { text: "Ergodicidad", link: "/procesos-aleatorios/ergodicidad" },
          {
            text: "Funciones de correlación",
            link: "/procesos-aleatorios/funciones-de-correlacion",
          },
          {
            text: "Características espectrales",
            link: "/procesos-aleatorios/caracteristicas-espectrales",
          },
          {
            text: "Ruido",
            link: "/procesos-aleatorios/ruido",
          },
          {
            text: "Respuesta de sistemas lineales",
            link: "/procesos-aleatorios/respuesta-de-sistemas-lineales",
          },
        ],
      },
      {
        text: "Cadenas de Markov",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/cadenas-markov/" },
          {
            text: "Tiempo continuo",
            collapsed: true,
            items: [
              {
                text: "Definición",
                link: "/cadenas-markov/tiempo-continuo/",
              },
              {
                text: "Vector de estado estable",
                link: "/cadenas-markov/tiempo-continuo/vector-de-estado-estable",
              },
            ],
          },
          {
            text: "Tiempo discreto",
            collapsed: true,
            items: [
              {
                text: "Definición",
                link: "/cadenas-markov/tiempo-discreto/",
              },
              {
                text: "Vector de estado estable",
                link: "/cadenas-markov/tiempo-discreto/vector-de-estado-estable",
              },
            ],
          },
        ],
      },
      {
        text: "Programación",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/programacion/" },
          {
            text: "PyX",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/programacion/pyx/" },
              {
                text: "Py0",
                link: "/programacion/pyx/py0",
              },
              {
                text: "Py1",
                link: "/programacion/pyx/py1",
              },
              {
                text: "Py2",
                link: "/programacion/pyx/py2",
              },
              {
                text: "Py3",
                link: "/programacion/pyx/py3",
              },
              {
                text: "Py4",
                link: "/programacion/pyx/py4",
              },
              {
                text: "Py5",
                link: "/programacion/pyx/py5",
              },
              {
                text: "Py6",
                link: "/programacion/pyx/py6",
              },
              {
                text: "Py7",
                link: "/programacion/pyx/py7",
              },
              {
                text: "PyML",
                link: "/programacion/pyx/pyml",
              },
            ],
          },
          {
            text: "Proyectos",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/programacion/proyectos/" },
              { text: "P1", link: "/programacion/proyectos/p1" },
              { text: "P2", link: "/programacion/proyectos/p2" },
              { text: "P3", link: "/programacion/proyectos/p3" },
              { text: "P4", link: "/programacion/proyectos/p4" },
              { text: "P5", link: "/programacion/proyectos/p5" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/fabianabarca/kalouk" },
    ],
    outlineTitle: "En esta página",
    lastUpdatedText: "Última actualización",
    darkModeSwitchLabel: "Apariencia",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
    returnToTopLabel: "Volver arriba",
    docFooter: {
      prev: "Página anterior",
      next: "Página siguiente",
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Buscar",
            buttonAriaLabel: "Buscar",
          },
          modal: {
            noResultsText: "No se encontraron resultados",
            resetButtonTitle: "Limpiar búsqueda",
            footer: {
              navigateText: "Para navegar",
              selectText: "Para seleccionar",
              closeText: "Para cerrar",
            },
          },
        },
      },
    },
  },
});
