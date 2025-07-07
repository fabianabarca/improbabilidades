# Kurtosis

::: tip Momento central de orden cuatro

La **kurtosis** $\kappa_X$ se define como:

$$
\kappa_X = E \left[ \left( \frac{X - m_1}{\sigma_X} \right)^4 \right] - 3
$$

Y es un número adimensional descriptor del **abultamiento** de la variable aleatoria $\ldots$

- $\ldots$ si está *"achatada"* ($\kappa_X < 0$) → *platicúrtica*
- $\ldots$ o es *prominente* ($\kappa_X > 0$) → *leptocúrtica*

La sustracción del 3 es una comparación con la distribución normal (que es siempre $\kappa_X = 3$) la cual se diría no es ni achatada ni prominente.
:::


::: info Ejemplo para un $f_X(x)$ de los primeros cuatro momentos

Para el siguiente PDF, $f_X(x)$, determine los primeros cuatro momentos de la variable aleatoria.

![Descripción de la imagen](/img/6_dist_dado.svg)

¿Primeras impresiones sobre la media, la dispersión, la inclinación y la kurtosis?


$$
f_X(x) =
\begin{cases}
1 		& 0 \leq x < 0.5 \\
0.5 	& 0.5 \leq x < 1.5 \\
0		& \text{en otro caso}
\end{cases}
$$

**La media** momento ordinario de orden uno,

$$
m_1 = E[X] = \int_{0}^{0.5} x \cdot 1\,dx + \int_{0.5}^{1.5} x \cdot 0.5\,dx = 0.625
$$

**La varianza** momento central de orden dos, 

$$
\begin{aligned}
\sigma_X^2 &= E[(X - m_1)^2] \\
&= E[X^2] - m_1^2 \\
&= \int_{0}^{0.5} x^2 \cdot 1\,dx + \int_{0.5}^{1.5} x^2 \cdot 0.5\,dx - 0.625^2 \\
&= 0.1927
\end{aligned}
$$

El significado de este número usualmente se aprecia en relación con otras
densidades probabilísticas (¿qué tan disperso es uno en comparación con
el otro?), y puede tener algún significado importante para el experimento
(la precisión de fabricación, por ejemplo).

**La inclinación (skewness)** momento central de orden tres,

$$
\begin{aligned}
S_X &=  \left[ \left( \frac{X - m_1}{\sigma_X} \right)^3 \right] \\
&= \int_{0}^{0.5} \left( \frac{x - 0.625}{0.439} \right)^3 \cdot 1\,dx \\
&\quad + \int_{0.5}^{1.5} \left( \frac{x - 0.625}{0.439} \right)^3 \cdot 0.5\,dx \\
&= 0.416
\end{aligned}
$$

Esto implica que está sesgada a la derecha.


**La kurtosis** momento central de orden cuatro,

$$
\begin{aligned}
\kappa_X &=  \left[ \left( \frac{X - m_1}{\sigma_X} \right)^4 \right]  \\
&= \int_{0}^{0.5} \left( \frac{x - 0.625}{0.439} \right)^4 \cdot 1\,dx \\
&\quad + \int_{0.5}^{1.5} \left( \frac{x - 0.625}{0.439} \right)^4 \cdot 0.5\,dx - 3 \\
&= -0.105
\end{aligned}
$$

lo que implica que tiene una cima achatada.

:::

::: info Ejemplos de momentos para distribuciones usuales
<!--
| ![](/img/6_prom_potencia.svg) | ![](/img/6_escala_apgar.svg) | ![](/img/6_pdf_rayleigh.svg) |
|:---------:|:---------:|:---------:|
| Uniforme  | Exponencial | Rayleigh |-->

<!-- En la presentanción aqui van 3 imagenes pero no están agregadas en la carpeta /img, agregué las que se usan de ejemplos en otro lugar de la presentación  -->


| **Característica** | **Uniforme**                         | **Exponencial**              | **Rayleigh**                                              |
|--------------------|--------------------------------------|------------------------------|-----------------------------------------------------------|
| **PDF**            | $\frac{1}{b - a}$                    | $\lambda e^{-\lambda x}$     | $\frac{x}{\sigma^2} e^{-x^2 / (2\sigma^2)}$              |
| **Media**          | $\frac{1}{2}(a + b)$                 | $\lambda^{-1}$               | $\sigma \sqrt{\frac{\pi}{2}}$                            |
| **Varianza**       | $\frac{1}{12}(b - a)^2$              | $\lambda^{-2}$               | $\frac{4 - \pi}{2} \sigma^2$                             |
| **Inclinación**    | $0$                                  | $2$                          | $\frac{2\sqrt{\pi}(\pi - 3)}{(4 - \pi)^{3/2}} \approx 0.63$ |
| **Kurtosis**       | $-\frac{6}{5}$                       | $6$                          | $-\frac{6\pi^2 - 24\pi + 16}{(4 - \pi)^2} \approx 0.24$   |

:::

# Videos y referencias en internet
-**The Expected Value and Variance of Discrete Random Variables** jbstatistics, [https://youtu.be/Vyk8HQOckIE](https://youtu.be/Vyk8HQOckIE)
