# Transformaciones de variables aleatorias
Las transformaciones permiten determinar la función de densidad probabilística de una variable aleatoria $Y$ a partir del conocimiento de otra VA $X$, relacionadas por la **función** $Y = T(X) = g(X)$. Es común en situaciones donde el resultado de un proceso o la salida de un sistema depende de una entrada aleatoria.

## Problema a resolver

En ocasiones se desea transformar una variable aleatoria $X$ en una nueva variable aleatoria $Y$ mediante una transformación (o función):

$$
    Y = T(X)
$$

Las funciones de densidad $f_{X}(x)$ o acumulativa $F_{X}(x)$ son conocidas.  

**El problema consiste en determinar las funciones** $F_{Y}(y)$ y $f_{Y}(y)$.

|                           |                           |                             |
|---------------------------|---------------------------|-----------------------------|
| ![Uniforme](/img/8_Distribucion_Uniforme.svg) | ![Caja](/img/8_Caja_de_transformacion.svg) | ![Resultante](/img/8_Distribucion_Resultante.svg) |


## Tipos de transformaciones


* **X (la "entrada")** puede ser discreta, continua o mixta. 

* **T (la transformación)** puede ser lineal, no lineal, segmentada, monotónica, no monotónica...


Hay muchas combinaciones, pero se considerarán tres casos:

- **(a)** \(X\) continua y \(T\) continua y monotónica.
- **(b)** \(X\) continua y \(T\) continua pero no monotónica.
- **(c)** \(X\) discreta y \(T\) continua.
