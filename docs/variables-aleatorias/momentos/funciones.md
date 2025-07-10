# Funciones que dan momentos

::: warning
Transcripción faltante de 2_7_1_generadora_caracteristica.md y falta diapositiva 25
:::

  ---

::: info Ejemplo para un $f_X(x)$ triangular
Para el siguiente pdf $f_X(x)$ triangular, determine la función característica, $\Phi_X(\omega)$, y la función generadora de momentos, $M_X(\nu)$, y a partir de ahí determine el primer momento ordinario (la media) y el segundo momento central (la varianza).

| Gráfica | Expresión |
| ------ | :----------: |
|![PDF fx(x) Triangular](/img/7_pdf_triangular.svg) |$f_X(x) = \begin{cases} x & 0 \leq x < 1 \\ 2 - x & 1 \leq x < 2 \\ 0 & \text{el resto} \end{cases}$|


**Pasos de la solución:**

**Función característica:**

$$
 \begin{aligned}
    \Phi_X(\omega) &= E[e^{j\omega x}] \\
    &= \int_0^1 x\,e^{j\omega x}\,dx + \int_1^2 (2 - x)\,e^{j\omega x}\,dx \\
    &= e^{j\omega} \left[\frac{\sin(\omega/2)}{\omega/2}\right]^2
\end{aligned}
$$


**Función generadora de momentos:**

$$
 \begin{aligned}
    M_X(s) &= E[e^{sx}] \\
    &= \int_0^1 x\,e^{sx}\,dx + \int_1^2 (2 - x)\,e^{sx}\,dx \\
    &= \frac{(e^s - 1)^2}{s^2}
\end{aligned}    
$$

**Primer momento ordinario usando la definición:**  

$$
\begin{aligned}
    m_1 &= E[X] \\
    &= \int_{-\infty}^{\infty} x\,f_X(x)\,dx \\
    &= \int_0^1 xx\,dx + \int_1^2 x(2-x)\,dx \\
    &= \frac{x^3}{3} \bigg\rvert_0^1 + x^2 \bigg\rvert_1^2 - \frac{x^3}{3} \bigg\rvert_1^2 \\
    &= 1 \text{ (Tiene sentido por la simetría)}
\end{aligned}
$$

 **Segundo momento central usando la definición:**  

$$
\begin{aligned}
    \sigma_X^2 &= E\left[ (X - \overline{X})^2 \right] \\
    &= E[X^2] - (E[X])^2 \\
    &= \int_{0}^{1} x^2\,x\,\mathrm{d}x + \int_{1}^{2} x^2\,(2-x)\,\mathrm{d}x - 1\ \\
    &= \frac{x^4}{4} \bigg\rvert_0^1 + \frac{2x^3}{3} \bigg\rvert_1^2 - \frac{x^4}{4} \bigg\rvert_1^2 - 1 \\
    &= \frac{1}{6}
\end{aligned}
$$


**Primer momento ordinario usando la MGF:**  

$$
\begin{aligned}
    m_1 &= \frac{d}{ds}\left[\left(\frac{e^s-1}{s}\right)^2\right] \bigg\rvert_{s=0} \\
    &= 2 \left(\frac{e^s-1}{s}\right)\left(\frac{se^s-e^s+1}{s^2}\right) \bigg\rvert_{s=0} \\
    &= 2\,(1)\,(1/2)\ \\
    &= 1
\end{aligned}
$$

*Corresponde con el resultado anterior*

**Segundo momento central usando la MGF:**
  
$$
\begin{aligned}
    \sigma_X^2 &= E\left[ (X - \overline{X})^2 \right] = E[X^2] - (E[X])^2 \\
    E[X^2] = \frac{d^2}{ds^2}\,M_X(s)\Bigg\rvert_{s=0} &= \frac{d^2}{ds^2}\left( 1 + \frac{s}{2!} + \frac{s^2}{3!} + \cdots + \frac{s^{n-1}}{n!} + \cdots \right)\Bigg\rvert_{s=0} \\
    &= \frac{d^2}{ds^2}\left( 1 + \cdots + \frac{s^2}{4} + \frac{2s^2}{6} + \cdots \right)\Bigg\rvert_{s=0} \\
    &= \frac{d^2}{ds^2}\left( 1 + \cdots + \frac{7s^2}{12} + \cdots \right)\Bigg\rvert_{s=0} = \frac{7}{6} \\ 
    \sigma_X^2 &= E[X^2] - (E[X])^2 = \frac{7}{6} - 1 = \frac{1}{6}
\end{aligned}
$$

*Corresponde con el resultado anterior*


En resumen: 

**Función característica:**

$$
\Phi_X(\omega) = e^{j\omega} \left[\frac{\sin(\omega/2)}{\omega/2}\right]^2
$$

**Función generadora de momentos:**

$$
M_X(s) = \frac{(e^s - 1)^2}{s^2}
$$

**Primer momento ordinario usando la definición:**  

$$
m_1 = 1\quad
$$

**Segundo momento central usando la definición:**  

$$
\sigma_X^2 = \frac{1}{6}
$$

**Primer momento ordinario usando la MGF:**  

$$
m_1 = 1
$$

**Segundo momento central usando la MGF:**

$$
\sigma_X^2 = \frac{1}{6}
$$
:::


## Unicidad de las funciones que dan momentos

La **MGF** (*Moment Generating Function*, función generadora de momentos) y la **CF** (*Characteristic Function*, función característica) son únicas para cada distribución y representan **una descripción completa de la variable aleatoria**, tanto como lo son la **CDF** (*Cumulative Distribution Function*, función de distribución acumulativa) y la **PDF** (*Probability Density Function*, función de densidad probabilística).

|         | Uniforme           | Exponencial        | Rayleigh           | 
|:--------|:------------------:|:------------------:|:------------------:|
| **PDF** | $\frac{1}{b-a}$  | $\lambda e^{-\lambda x}$| $\frac{x}{\sigma^2} e^{-x^2/(2\sigma^2)}$ |
| <br> **MGF** | $\left\{ \begin{array}{ll} \frac{e^{\nu b} - e^{\nu a}}{\nu (b-a)} & \text{para } \nu \neq 0 \\[1mm] 1 & \text{para } \nu = 0 \end{array} \right.$ | <br> $\frac{\lambda}{\lambda - \nu}, \quad \nu < \lambda$ | <br> $1 + \sigma \nu e^{\sigma^2 \nu^2 / 2} \ldots$ |
| <br> **CF**  | $\left\{ \begin{array}{ll} \frac{e^{j \omega b} - e^{j \omega a}}{j \omega (b-a)} & \text{para } \omega \neq 0 \\[1mm] 1 & \text{para } \omega = 0 \end{array} \right.$ | <br> $\frac{\lambda}{\lambda - j \omega}$ | <br> $1 - \sigma \omega e^{-\sigma^2 \omega^2 / 2} \ldots$ |



# Ejemplo de determinación de la función característica 


::: info Ejemplo de determinación de la función característica

Se define una variable aleatoria discreta $Y$ con la función de densidad probabilística:

$$
\begin{aligned}
    f_{Y}(y) =\ & P\{ X \leq x_{1} \}\delta(y-1) \\
                & + P\{ x_{1} < X \leq x_{2} \} \delta(y-2) \\
                & + P\{ x_{2} < X \leq x_{3} \}\delta(y-3) \\
                & + P\{ x_{3} < X < \infty \}\delta(y-4)    
\end{aligned}
$$

donde $X$ es una variable aleatoria gaussiana de media 50 y desviación estándar $\sigma = 10$, con $x_{1} = 25$, $x_{2} = 40$ y $x_{3} = 60$.

Se solicita:

1. Graficar $\displaystyle f_{Y}(y)$ utilizando los valores de probabilidades.
2. Calcular la función característica de la variable aleatoria $Y$.
3. Calcular $\displaystyle E[Y^2]$ y la varianza.

---

**Parte 1:** Graficar $f_{Y}(y)$ utilizando los valores correspondientes de probabilidades. 

Para darle valores a la función de densidad $f_Y(y)$ es necesario normalizar $Z$ y calcular (con tabla o programa de cómputo):

$$
Z = \frac{X - 50}{10}
$$

![Distribución normal estándar con áreas coloreadas entre z=-2.5, z=-1, z=1](/img/7_gauss_norm.svg)

*Figura 1: Distribución Gaussiana normalizada (representación gráfica)*

---



- $P\{ X \leq 25 \} = F_X(25) = F_Z(-2.50) = 1 - F_Z(2.50) = 1 - 0.9938 = \mathbf{0.0062}$
- $P\{ 25 < X \leq 40 \} = F_X(40) - F_X(25) = \mathbf{0.1525}$
- $P\{ 40 < X \leq 60 \} = F_X(60) - F_X(40) = \mathbf{0.6826}$
- $P\{ 60 < X < \infty \} = F_X(\infty) - F_X(60) = \mathbf{0.1587}$

Observar que $0.0062 + 0.1525 + 0.6826 + 0.1587 = 1$ Así entonces, la función de densidad discreta (PMF) de Y se reescribe como:

$$
\begin{aligned}
    f_{Y}(y) = & 0.0062~ \delta(y-1) \\
    & + 0.1525~ \delta(y-2) \\
    & + 0.6826~ \delta(y-3) \\
    & + 0.1587~ \delta(y-4)
\end{aligned}
$$

---



![Función de densidad en t=1](/img/7_pdf_discreta.svg)

Figura: Función de densidad discreta (PMF) de la va Y (no está a escala).




**Parte 2:** Calcular la función característica de la variable aleatoria $Y$

Por definición, la función característica es:

$$
\begin{aligned}
\Phi_{X}(\omega) &= E\left[ e^{j\omega X}\right] \\
                  &= \int_{-\infty}^{\infty} f_{X}(x) e^{j\omega x}  dx
\end{aligned}
$$

Aplicando a la variable aleatoria $Y$ resulta:

$$
\begin{aligned}
\Phi_{Y}(\omega) &= E\left[ e^{j\omega Y}\right] \\
                  &= \int_{-\infty}^{\infty} f_{Y}(y) e^{j\omega y}  dy \\
                  &= \int_{-\infty}^{\infty} \left[ 0.0062 \delta(y-1) + 0.1525 \delta(y-2) \right. \\
                  & \quad \left. + 0.6826 \delta(y-3) + 0.1587 \delta(y-4) \right] e^{j\omega y}  dy
\end{aligned}
$$

---

### Recordatorio sobre la función impulso

La función impulso o delta de Dirac está definida como:

$$
\delta(x - x_0) =
\begin{cases}
+\infty & x = x_0 \\
0 & \text{en otra parte}
\end{cases}
$$

Y su integral es:

$$
\int_{-\infty}^{+\infty} \delta(x)  dx = 1
$$

pero más en general:

$$
\boxed{\int_{-\infty}^{+\infty} \delta(x - x_0) f(x)  dx = f(x_0)}
$$

---



Continuando, se determina entonces:

$$
\begin{aligned}
\Phi_{Y}(\omega) &= \int_{-\infty}^{\infty} \left[ 0.0062 \delta(y-1) + 0.1525 \delta(y-2) \right. \\
                  & \quad \left. + 0.6826 \delta(y-3) + 0.1587 \delta(y-4) \right] e^{j\omega y}  dy
\end{aligned}
$$

Aplicando la propiedad del delta de Dirac:

$$
\boxed{\Phi_{Y}(\omega) = 0.0062 e^{j\omega 1} + 0.1525 e^{j\omega 2} + 0.6826 e^{j\omega 3} + 0.1587 e^{j\omega 4}}
$$

Que es la función característica de $Y$.    

:::

::: warning
Falta diapositiva 25
:::

::: info
$$
m_2 = (-j)^2 \frac{d^2}{d\omega^2} \Phi_Y(\omega) \Big|_{\omega=0}
$$

$$
= -1 \cdot \frac{d^2}{d\omega^2} \left[
    0.0062\,e^{j\omega1} + 0.1525\,e^{j\omega2} + 0.6826\,e^{j\omega3} + 0.1587\,e^{j\omega4}
\right] \Bigg|_{\omega=0}
$$

$$
= -1 \left[
    (-0.0062)\,e^{j\omega1} + (-0.6100)\,e^{j\omega2} + (-6.1434)\,e^{j\omega3} + (-2.5392)\,e^{j\omega4}
\right]_{\omega=0}
$$

$$
m_2 = 9.2988
$$


**Confirmación con la definición directa:**

$$
E(Y^2) = \int_{-\infty}^{+\infty} y^2 f_Y(y)\,dy
$$

$$
= \int_{-\infty}^{+\infty} y^2 \left[
    0.0062\,\delta(y - 1) +
0.1525\,\delta(y - 2) +
0.6826\,\delta(y - 3) +
0.1587\,\delta(y - 4)
\right] dy
$$

$$
= 0.0062 \cdot 1^2 +
0.1525 \cdot 2^2 +
0.6826 \cdot 3^2 +
0.1587 \cdot 4^2
$$

$$
= 0.0062 \cdot 1 +
0.1525 \cdot 4 +
0.6826 \cdot 9 +
0.1587 \cdot 16
$$

$$
E(Y^2) = 9.2988
$$

Resultado coincide con el obtenido por derivación de la función característica..

**Cálculo de la media $E[Y]$:**

$$
E[Y] = \int_{-\infty}^{+\infty} y f_Y(y)\,dy
$$

$$
= 0.0062 \cdot 1 + 0.1525 \cdot 2 + 0.6826 \cdot 3 + 0.1587 \cdot 4
$$

$$
E[Y] = 0.0062 + 0.3050 + 2.0478 + 0.6348 = 2.9938
$$

El resultado $E[Y] = 2.9938$ tiene sentido porque es muy cercano a 3, donde está concentrada la mayor probabilidad según $f_Y(y)$.

Entonces la **varianza** es:

$$
\sigma_Y^2 = E[Y^2] - (E[Y])^2 = 9.2988 - (2.9938)^2 = 0.3360
$$

Y la **desviación estándar**:

$$
\sigma_Y = \sqrt{0.3360} = 0.5796
$$

Esto indica una **dispersión baja**, lo cual concuerda con la fuerte concentración de valores alrededor de 3.

:::