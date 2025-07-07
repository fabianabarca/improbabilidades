# Varianza
## Varianza y desviación estándar

::: tip Segundo momento central:

A $\mu_2$ se le da el nombre *varianza* y tiene la notación $\sigma_X^2$

$$
\begin{aligned}
\sigma_X^2 &= E[(X - \overline{X})^2] \\
           &= \int_{-\infty}^{\infty} (x - \overline{X})^2 f_X(x) \, dx \\
           &= E[X^2-2X\overline{X}+\overline{X}^2]\\
           &= E[X^2] -2(E[X])^2+ \overline{X}^2\\
           &= E[X^2] - \overline{X}^2 \\
           &= m_2 - m_1^2
\end{aligned}
$$
:::

::: tip Desviación estándar
La raíz cuadrada positiva de la varianza, $\sigma_x$ , se denomina la **desviación estándar** de X.
Es una medida de la dispersión de la función $f_{x} (x)$ alrededor de la media.

**Desviación estándar:** $\sigma_X = \sqrt{\sigma_X^2}$
:::