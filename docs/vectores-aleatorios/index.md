# Variables aleatorias múltiples

También conocidas como vectores aleatorios, son una extensión de las variables aleatorias unidimensionales a múltiples dimensiones. Estas variables permiten modelar fenómenos que involucran más de una variable aleatoria simultáneamente, lo que es esencial en muchos campos como la estadística multivariada, la teoría de la probabilidad y el análisis de datos.

## Variables aleatorias múltiples

- Las **variables aleatorias múltiples** pasan de un espacio de probabilidades $(S \rightarrow \mathbb{R}^1, P)$, llamado "ordinario" o "marginal", a otro $(S \rightarrow \mathbb{R}^n, P)$, llamado también "conjunto" o "multidimensional". Por ejemplo:


::: info Tabla marginal
| X    | P     |
|------|-------|
| 6.13 | 0.047 |
| 4.23 | 0.099 |
| 7.81 | 0.343 |
| 9.71 | 0.038 |
| 3.72 | 0.134 |
| 1.89 | 0.339 |
| *Total* | **1.000** |
:::

::: info Tabla conjunto
| X    | Y    | Z    | P     |
|------|------|------|-------|
| 6.13 | 2.61 | 0.02 | 0.216 |
| 4.23 | 7.41 | 3.64 | 0.160 |
| 7.81 | 1.23 | 4.23 | 0.028 |
| 9.71 | 8.39 | 9.93 | 0.191 |
| 3.72 | 1.04 | 7.86 | 0.198 |
| 1.89 | 4.16 | 2.97 | 0.207 |
|      |      | *Total* | **1.000** |

:::
---


- Supóngase que dos variables aleatorias $X$ y $Y$ están definidas sobre un espacio $S$ de muestras. Cualquier par ordenado de números $(x, y)$ puede considerarse un punto aleatorio en el plano $XY$ y es un valor específico de un **vector aleatorio** $[X, Y]$.

![Puntos xy](/img/9_puntos_xy.svg)








---

- Cuando hay un número discreto de pares ordenados, cada uno tiene asociada una probabilidad de ocurrencia no nula $P(x_m,y_n) = p_{m,n}$. Es necesario que:

$$
\sum_m^M \sum_n^N p_{m,n} = 1
$$

![Probabilidades xy](/img/9_probabilidades_xy.svg)

---

- Una representación posible para la magnitud de la probabilidad es la de un gráfico bidimensional con un código de colores según una escala.

![Mapa de calor xy](/img/9_xy_mapa_de_calor.svg)

---

- Otra representación usual es una gráfica tridimensional con el eje $z$ siendo la probabilidad para todo $(x_i, y_i)$. La mostrada es una función de probabilidad de **masa** conjunta, donde el marcador además tiene un color asociado con su magnitud.

![Mapa de calor 3D xy](/img/9_xy_3D_calor.svg)

---

- Cuando $X$ y $Y$ son continuos, existe una función de densidad de probabilidad $f_{X,Y}(x,y)$ definida para todo $x$ y $y$, y la gráfica tridimensional es una superficie.

::: info Ejemplo

$$
f_{X,Y}(x,y) = \frac{1}{8}(x + y), \quad 0 \leq x, y \leq 2
$$

![PDF continua xy](/img/9_xy_pdf_continua.svg)
:::

# Función acumulativa conjunta

## Probabilidad de un evento conjunto $A \cap B$
### Deducción de la función acumulativa para variables aleatorias múltiples

Similar al caso de una variable aleatoria ordinaria, definamos los eventos $A$ y $B$ como:

![Intersección A y B](/img/9_A_cap_B.svg)

El evento $A\cap B$ definido en $S$ corresponde al evento conjunto $\{ X \leq x \land Y \leq y \}$, también expresado como $\{X \leq x, Y \leq y\}$, definido en $S_J$, donde $S_J$ es el espacio de muestras en $xy$, o también *espacio producto bidimensional*.

---

## La función acumulativa conjunta de VA **continuas**

::: tip "**Función de probabilidad acumulativa conjunta continua**"
La probabilidad del evento conjunto $\{X \leq x, Y \leq y\}$ es una **función acumulativa conjunta** denotada por:

$$
F_{X,Y}(x,y) = P( X \leq x, Y \leq y )
$$

donde $P(X \leq x, Y \leq y) = P(A \cap B)$.
:::

## La función acumulativa conjunta de VA **discretas**

::: tip **Función de probabilidad acumulativa conjunta discreta**
La función acumulativa conjunta para dos variables aleatorias discretas $X$ (con $N$ posibles valores $x_n$) y $Y$ (con $M$ posibles valores $y_m$), es:

$$
F_{X,Y}(x,y) = \sum_{n=1}^{N} \sum_{m = 1}^{M} P(x_n, y_m) \, u(x - x_n) \, u(y - y_m)
$$

donde $P(x_n, y_m)$ es la probabilidad del evento conjunto $\{X = x_n, Y = y_m\}$, y $u(\cdot)$ es la función escalón unitario.
:::


> ## Generalización de la función de probabilidad acumulativa para $N$ VA
> Para $N$ variables aleatorias $X_n$, $n = 1, 2, \ldots, N$, la generalización es directa:

>$$
>F_{X_1, X_2, \ldots, X_N}(x_1, x_2, \ldots, x_N) = P\{X_1 \leq x_1, X_2 \leq x_2, \ldots, X_N \leq x_N\}
>$$

---
## Propiedades de la función acumulativa conjunta

1. **La probabilidad de estar por debajo de $-\infty$ es cero**

$$
F_{X,Y}(-\infty, -\infty) = 0 \quad F_{X,Y}(-\infty, y) = 0 \quad F_{X,Y}(x, -\infty) = 0
$$

2. **La probabilidad de estar por debajo de $+\infty$ es uno**

$$
F_{X,Y}(\infty, \infty) = 1
$$

3. **La función acumulativa conjunta es una probabilidad**

$$
0 \leq F_{X,Y}(x,y) \leq 1
$$

4. **$F_{X,Y}(x,y)$ es una función no decreciente tanto de $X$ como de $Y$**


5. **La probabilidad en una región $\mathcal{R} = \{x_1 < X \leq x_2, y_1 < Y \leq y_2\}$ es**

$$
P\{x_1 < X \leq x_2, y_1 < Y \leq y_2\}=F_{X,Y}(x_2,y_2) + F_{X,Y}(x_1,y_1) - F_{X,Y}(x_1,y_2) - F_{X,Y}(x_2,y_1)  \geq 0
$$

6. **Funciones acumulativas marginales**
    
- 6a. **Función acumulativa marginal de $X$**

$$
F_{X,Y}(x, \infty) = F_X(x)
$$

- 6b. **Función acumulativa marginal de $Y$**

$$
F_{X,Y}(\infty, y) = F_Y(y)
$$

### Nota sobre la propiedad 6
Obsérvese que

$$
F_{X,Y}(x,y) = P\{X \leq x, Y \leq y\} = P(A \cap B)
$$

Si se hace que $y = \infty$, esto equivale a hacer $B = \{Y \leq y\}$ el evento seguro; es decir, $B = \{Y \leq \infty\} = S$. Además, dado que $A \cap B = A \cap S = A$, entonces se tiene

$$
\boxed{F_{X,Y}(x, \infty) = P(A \cap S) = P(A) = P( X \leq x ) = F_{X}(x)}
$$

Una prueba similar puede establecerse para $F_Y(y)$.

::: tip Generalización de las distribuciones marginales

De una función de distribución conjunta $N$-dimensional se puede obtener una función de distribución marginal $K$-dimensional, para cualquier grupo escogido de $K$ de las $N$ variables aleatorias, con fijar los valores de las otras $N-K$ variables aleatorias a infinito. Aquí $K$ puede ser cualquier entero $1, 2, 3, \ldots, N - 1$.
:::

Por ejemplo, si existe $F_{W,X,Y,Z}(w,x,y,z)$ y nos interesa la función acumulativa marginal para $W$ y $X$, hay que hacer:

$$
F_{W,X}(w,x) = F_{W,X,Y,Z}(w,x,\infty,\infty)
$$

::: info Ejemplo de una función acumulativa bivariada continua

![Función acumulativa conjunta: ejemplo continuo](/img/9_ej_func_acum_bivariada_continua.svg)
:::

## Función de densidad probabilística conjunta

### Función de densidad probabilística conjunta de variables aleatorias **continuas**

::: tip Función de densidad probabilística conjunta bivariada continua

Para dos variables aleatorias $X$ y $Y$, la función de densidad probabilística conjunta, $f_{X,Y}(x,y)$, está definida por la segunda derivada de la función de distribución conjunta (dondequiera que esta exista),

$$
f_{X,Y}(x,y) = \frac{\partial^2 F_{X,Y}(x,y)}{\partial x \partial y}
$$
:::

### Función de densidad probabilística conjunta de variables aleatorias **discretas**

::: tip Función de densidad probabilística conjunta bivariada discreta

La función de densidad conjunta para dos variables aleatorias discretas está dada por:

$$
f_{X,Y}(x,y) = \sum_{n=1}^{N}\sum_{m=1}^{M}P(x_n,y_m)\delta(x-x_n)\delta(y-y_m)
$$
:::

---

::: info Ejemplo de una función de densidad bivariada discreta

Valores de probabilidad para la combinación de una variable aleatoria $X$ con otra $Y$. Por ejemplo, los valores de $X$ podrían representar **intervalos** de la estatura de una población, y $Y$ de su peso.

| $P(x_n, y_m)$ | $y_1$   | $y_2$   | $y_3$   | $y_4$   | $y_5$   | $y_6$   | $y_7$   |
|--------------|---------|---------|---------|---------|---------|---------|---------|
| $x_1$        | 0.00164 | 0.00572 | 0.01211 | 0.01555 | 0.01211 | 0.00572 | 0.00164 |
| $x_2$        | 0.00735 | 0.02564 | 0.05427 | 0.06969 | 0.05427 | 0.02564 | 0.00735 |
| $x_3$        | 0.01211 | 0.04227 | 0.08948 | 0.11490 | 0.08948 | 0.04227 | 0.01211 |
| $x_4$        | 0.00735 | 0.02564 | 0.05427 | 0.06969 | 0.05427 | 0.02564 | 0.00735 |
| $x_5$        | 0.00164 | 0.00572 | 0.01211 | 0.01555 | 0.01211 | 0.00572 | 0.00164 |

![Este comportamiento es doblemente normal](/img/9_ej_func_acum_bivariada_discreta.svg)

Se visualiza un comportamiento doblemente normal en la figura.
:::

## Generalización de la función de densidad probabilística para $N$ variables aleatorias

Cuando $N$ variables aleatorias $X_1, X_2, \ldots, X_N$ están involucradas, la función de densidad conjunta se convierte en la $N$-ésima derivada parcial de la función de distribución $N$-dimensional

$$
f_{X_1, X_2, \ldots, X_N}(x_1, x_2, \ldots, x_N) = \frac{\partial^{N}F_{X_1, X_2, \ldots, X_{N}}(x_1, x_2, \ldots, x_N)}{\partial x_1 \partial x_2 \cdots \partial x_N}
$$

Por integración directa este resultado es equivalente a:

$$
F_{X_1, \ldots, X_N}(x_1, \ldots, x_N) = \int_{-\infty}^{x_N} \cdots \int_{-\infty}^{x_1}f_{X_1, \ldots, X_N}(v_1, \ldots, v_N)~\mathrm{d}v_1 \cdots \mathrm{d}v_N
$$



## Propiedades de la función de densidad conjunta

1) La función de densidad es siempre positiva:

$$
f_{X,Y}(x,y) \geq 0
$$


2) El volumen bajo la superficie en todo el plano $XY$ es unitario:

$$
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,\mathrm{d} x\,\mathrm{d} y = 1
$$


3) La probabilidad en una región $\mathcal{R}$ es el volumen bajo la superficie en $\mathcal{R}$:

$$
P(x_1 < X \leq x_2,\ y_1 < Y \leq y_2) =
\int_{y_1}^{y_2} \int_{x_1}^{x_2} f_{X,Y}(x,y)\,\mathrm{d} x\,\mathrm{d} y
$$


4) La función acumulativa conjunta es el volumen bajo la superficie de la región $\{ X \leq x,\ Y \leq y \}$ de la función de densidad:

$$
F_{X,Y}(x,y) = P(X \leq x,\ Y \leq y) =
\int_{-\infty}^{y} \int_{-\infty}^{x} f_{X,Y}(v_1,v_2)\,\mathrm{d} v_1\,\mathrm{d} v_2
$$


5) Funciones acumulativas marginales:

5a. Función acumulativa marginal de $X$:

$$
F_X(x) = \int_{-\infty}^{x} \int_{-\infty}^{\infty} f_{X,Y}(v_1,v_2)\,\mathrm{d} v_2\,\mathrm{d} v_1
$$

5b. Función acumulativa marginal de $Y$:

$$
F_Y(y) = \int_{-\infty}^{y} \int_{-\infty}^{\infty} f_{X,Y}(v_1,v_2)\,\mathrm{d} v_1\,\mathrm{d} v_2
$$

6) Funciones de densidad marginales:

6a. Función de densidad marginal de $X$:

$$
f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,\mathrm{d} y = \frac{d}{\mathrm{d} x} F_X(x)
$$

6b. Función de densidad marginal de $Y$:

$$
f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,\mathrm{d} x = \frac{d}{\mathrm{d} y} F_Y(y)
$$

::: info ¿Cómo se calculan funciones de densidad marginales?

Encuentre $f_X(x)$ y $f_Y(y)$ cuando la función de densidad conjunta es:

$f_{X,Y}(x,y) = x\,e^{-x(y+1)}\,u(x)\,u(y)$

Gráfica de la función en cuestión:

![Gráfico de la función en cuestión](/img/9_pdf_bivariada.svg)

Para la solución, se debe tomar la función de densidad conjunta e integrar primero sobre todo el ámbito de valores de la variable aleatoria $Y$, para obtener la función de densidad de $X$:

$$
\begin{aligned}
f_X(x) &= \int_{-\infty}^{\infty} u(x)u(y)\,x\,e^{-x(y+1)}\,\mathrm{d} y \\
       &= u(x)\,x\,e^{-x} \int_{0}^{\infty} e^{-x y}\,\mathrm{d} y \\
       &= u(x)\,x\,e^{-x} \left[ \frac{e^{-x y}}{-x} \right] \Big|_0^{\infty} \\
       &= e^{-x} u(x)
\end{aligned}
$$

Luego, se toma la función de densidad conjunta y se integra sobre todo el ámbito de valores de la variable aleatoria $X$, para obtener la función de densidad de $Y$:

$$
\begin{aligned}
f_Y(y) &= \int_{-\infty}^{\infty} u(x)u(y)\,x\,e^{-x(y+1)}\,\mathrm{d} x \\
       &= u(y) \int_{0}^{\infty} x\,e^{-x(y+1)}\,\mathrm{d} x \\
       &= u(y) \left[
           -\frac{x\,e^{-x(y+1)}}{y+1} \Big|_0^{\infty}
         -\frac{e^{-x(y+1)}}{(y+1)^2} \Big|_0^{\infty}
       \right] \\
       &= \frac{1}{(y+1)^2} u(y)
\end{aligned}
$$

> En estos cálculos se utilizó la técnica de la integración por partes

Y finalmente:

Se tienen las funciones de densidad marginales de $f_{X,Y}(x,y)$:

$f_X(x) = e^{-x} u(x)$

$f_Y(y) = \frac{1}{(y+1)^2} u(y)$

Gráfica de las funciones obtenidas:

![Gráfico de las funciones resultantes](/img/9_pdfs_marginales.svg)

:::

::: warning
Transcripción faltante de 3_9_4_independencia_estadistica.md
:::