# Momentos de las variables aleatorias múltiples

::: warning
Transcripción de 3_10_1_valor_esperado_momentos_correlacion.md posee varios errores. Falta de corregir
:::
## Valor esperado de una función de variables aleatorias

El valor esperado de una función de variables aleatorias se define como el promedio ponderado de los valores que puede tomar esta función.

Para variables aleatorias discretas $X$ y $Y$, y una función $g(X, Y)$, el valor esperado se define como:

$$
E[g(X, Y)] = \sum_x \sum_y g(x, y) \cdot P_{X,Y}(x, y)
$$

Para variables aleatorias continuas:

$$
E[g(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y) \cdot f_{X,Y}(x, y) \, \mathrm{d}x \, \mathrm{d}y
$$

::: info **Ejemplo:** **Valor esperado de una función de variables aleatorias**

El PDF conjunto de la cantidad $X$ de almendras y la cantidad $Y$ de semillas de marañón (y la cantidad $Z$ de maní) en un tarro de 1 kg es:
Sean los valores de \(x\) y \(y\) tales que:

- x está entre 0 y 1,
- y está entre 0 y 1,
- y la suma x + y es menor o igual que 1.

$$
f_{X,Y}(x, y) = 24xy
$$

En cualquier otro caso:

$$
f_{X,Y}(x, y) = 0
$$

Si 1 kg de almendras le cuesta a la compañía ₡6000, un kilogramo de semillas de marañón son ₡10.000 y 1 kg de maní cuesta ₡3.500.  
**¿Cuál es el costo esperado total del contenido del tarro?**
Sea la función del costo

$$
h(X, Y) = 6000X + 10000Y + 3500(1 - X - Y)
$$

Entonces,

$$
E[h(X, Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} h(x, y)\, f_{X,Y}(x, y) \, dx\, dy
$$

Se reduce a:

$$
E[h(X, Y)] = \int_0^1 \int_0^{1-x} \left[6000x + 10000y + 3500(1 - x - y)\right] 24xy\, dy\, dx
$$

$$
= 7100
$$

que representa los costos esperados del contenido de la caja.
:::


## Momentos conjuntos alrededor del origen

Los momentos conjuntos alrededor del origen miden el comportamiento combinado de dos variables aleatorias.
Para dos variables aleatorias  X  y  Y  se denotan por mₙₖ = E[XⁿYᵏ]
 y se definen por:

::: warning
Falta fórmula aquí.
:::

### Casos especiales

::: warning
Faltan **muchas** fórmulas aquí.
:::

**Ejemplo de la ubicación del “centro de gravedad” I:**

![Ejemplo: Gráfica de gravedad](/img/10_gravedad.svg)


# Sección 3: La correlación

La covarianza entre dos variables aleatorias mide cómo varían ambas respecto a sus medias.

El momento de segundo orden  m₁₁ = E[XY] es denominado la **correlación** de X y  Y.  
Recibe el símbolo especial Rₓᵧ por su importancia.

$$
R_{XY} = m_{11} = E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy \, f_{X,Y}(x, y) \, dx \, dy
$$

### Interpretaciones posibles

- “La correlación es el grado en el cual dos o más cantidades están linealmente asociadas”.
- Pero (fundamental) **“correlación no implica causalidad”**.


::: info Ejemplo de correlación del tarro de nueces
El PDF conjunto de la cantidad X de almendras, la cantidad Y de semillas de marañón y la cantidad Z de maní en un tarro de 1 kg está dado por:

Sea $f_{X,Y}(x, y) = 24xy$  en el dominio:
- x está entre 0 y 1,
- y está entre 0 y 1,
- y la suma x + y es menor o igual que 1.

¿Cuál es la correlación entre X y Y?




$$
= \int_0^1 \int_0^{1-y} xy \cdot 24xy \, dx \, dy = 24 \int_0^1 y^2 \left( \int_0^{1-y} x^2 \, dx \right) dy
$$

$$
= \frac{24}{3} \int_0^1 y^2 (1 - y)^3 \, dy
$$

$$
= \frac{24}{3} \left[ -\frac{y^6}{6} + \frac{3y^5}{5} - \frac{3y^4}{4} + \frac{y^3}{3} \right]_0^1 = \frac{2}{15} \approx 0{,}13
$$

:::

::: warning
Falta fórmula en el ejemplo anterior.
:::


## Independencia y correlación

::: tip Independencia y correlación
La independencia estadística de $X$ y $Y$ es suficiente para garantizar que **no** están correlacionadas.
:::

> El recíproco de esta afirmación, que $X$ y $Y$ son independientes si no están correlacionadas, **no es necesariamente cierto**.  
> Una excepción importante: **variables gaussianas no correlacionadas sí son independientes**.

## Ortogonalidad

::: tip Ortogonalidad
Si $R_{XY} = 0$ para dos variables aleatorias $X$ y $Y$, estas se denominan ortogonales.
:::

### En síntesis

- Si $R_{XY} = E[XY] = E[X]E[Y]$, entonces $X$ y $Y$ **no están correlacionadas**.
- La independencia, es decir, $f_{XY}(x,y) = f_X(x) \cdot f_Y(y)$, **garantiza** que no estén correlacionadas, pero no a la inversa.
- Si $R_{XY} = 0$, las variables son **ortogonales**.

---

::: info Correlación y ortogonalidad entre $X$ y $Y$
Sea $X$ una variable aleatoria con valor medio $\overline{X} = E[X] = 3$ y varianza $\sigma_X^2 = 2$, y sea $Y = -6X + 22$.

Determinar si $X$ y $Y$ están correlacionadas y si son ortogonales.

1. Calculamos el segundo momento de $X$ alrededor del origen:

$$
E[X^2] = \sigma_X^2 + \left( E[X] \right)^2 = 2 + 9 = 11
$$

2. Valor esperado de $Y$:

$$
E[Y] = -6E[X] + 22 = -6 \cdot 3 + 22 = 4
$$

3. Producto cruzado:

$$
\begin{aligned}
R_{XY} &= E[XY] \\
&= E[X(-6X + 22)] = E[-6X^2 + 22X] \\
&= -6E[X^2] + 22E[X] = -6(11) + 22(3) = 0
\end{aligned}
$$
:::

> $X$ y $Y$ **son ortogonales** porque $R_{XY} = 0$.  
    Sin embargo, **no están no correlacionadas** en el sentido de la media, ya que $E[X]E[Y] = 3 \cdot 4 = 12 \neq R_{XY}$.

::: warning Nota
Dos variables aleatorias pueden ser ortogonales incluso si una es función lineal de la otra: $Y = aX + b$.
:::


## Momentos centrales conjuntos
::: tip Momentos centrales conjuntos
Para dos variables aleatorias $X$ y $Y$:

$$
\begin{aligned}
\mu_{nk} &= E\left[ (X - \overline{X})^n (Y - \overline{Y})^k \right] \\
&= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x - \overline{X})^n (y - \overline{Y})^k f_{X,Y}(x,y) ~\mathrm{d}x ~\mathrm{d}y
\end{aligned}
$$
:::

**Momentos importantes**:

- $\mu_{20} = E[(X - \overline{X})^2] = \sigma_X^2$
- $\mu_{02} = E[(Y - \overline{Y})^2] = \sigma_Y^2$

---

## Covarianza de dos variables aleatorias

::: tip Covarianza
La covarianza $C_{XY}$ es el momento central conjunto de orden (1,1):

$$
\begin{aligned}
C_{XY} &= E[(X - \overline{X})(Y - \overline{Y})] \\
&= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x - \overline{X})(y - \overline{Y}) f_{X,Y}(x,y) ~\mathrm{d}x ~\mathrm{d}y \\
&= E[XY] - E[X]E[Y] = R_{XY} - E[X]E[Y]
\end{aligned}
$$
:::

**Propiedades**:

1. Si $X$ y $Y$ son independientes o no correlacionadas: $C_{XY} = 0$  
2. Si $X$ y $Y$ son ortogonales: $C_{XY} = -E[X]E[Y]$  
   - Si además $E[X] = 0$ o $E[Y] = 0$, entonces $C_{XY} = 0$


## Coeficiente de correlación de Pearson

El coeficiente de correlación normalizado es:

$$
\rho = \frac{\mu_{11}}{\sqrt{\mu_{20} \mu_{02}}} = \frac{C_{XY}}{\sigma_X \sigma_Y}
$$

También puede escribirse como:

$$
\begin{aligned}
\rho &= \frac{E[(X - \overline{X})(Y - \overline{Y})]}{\sigma_X \sigma_Y} \\
&= E\left[ \frac{(X - \overline{X})}{\sigma_X} \cdot \frac{(Y - \overline{Y})}{\sigma_Y} \right]
\end{aligned}
$$

**Rango**: $-1 \leq \rho \leq 1$

### Visualización de casos especiales del coeficiente de correlación de Pearson

![Ejemplo: Ubicación del "centro de gravedad"](/img/10_pearson.svg)

## Funciones características conjuntas

::: tip Definición
La función característica conjunta de dos variables aleatorias $X$ y $Y$ está definida por: 


$$
\Phi_{X,Y}(\omega_1, \omega_2) = E\left[ e^{j\omega_1 X + j\omega_2 Y} \right]
$$

donde $\omega_1, \omega_2$ son números reales. Una forma equivalente es:

$$
\Phi_{X,Y}(\omega_1, \omega_2) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x,y) e^{j\omega_1 x + j\omega_2 y} ~\mathrm{d}x ~\mathrm{d}y
$$

:::

Lo anterior es la transformada bidimensional de Fourier (con signos cambiados para $\omega_1, \omega_2$) de la función de densidad conjunta. De la transformada inversa de Fourier se tiene:

$$
f_{X,Y}(x,y) = \frac{1}{(2\pi)^2} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \Phi_{X,Y}(\omega_1, \omega_2) e^{-j\omega_1 x - j\omega_2 y} ~\mathrm{d}\omega_1 ~\mathrm{d}\omega_2
$$

Con poner $\omega_2 = 0$ u $\omega_1 = 0$, se obtiene las funciones características de $X$ o $Y$, de $\Phi_{X,Y}(\omega_1, \omega_2)$. Estas se llaman funciones características marginales: 

- $\Phi_X(\omega_1) = \Phi_{X,Y}(\omega_1, 0)$
- $\Phi_Y(\omega_2) = \Phi_{X,Y}(0, \omega_2)$

Los momentos conjuntos $m_{nk}$ pueden hallarse de la función característica conjunta como sigue:

$$
m_{nk} = \left. (-j)^{n+k} \frac{\partial^{n+k} \Phi_{X,Y}(\omega_1, \omega_2)}{\partial \omega_1^n ~\partial \omega_2^k} \right|_{\omega_1 = 0,~ \omega_2 = 0}
$$
