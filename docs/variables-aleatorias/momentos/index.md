# Momentos de las variables aleatorias
El valor esperado y los "momentos" (su generalización) permiten caracterizar numéricamente el comportamiento o las tendencias de una variable aleatoria.

El valor esperado es un caso especial de una categoría más general, denominada "momentos de una variable aleatoria". Son valores que resumen o sintetizan propiedades de la variable aleatoria.

Mientras que la función de densidad de probabilidad (PDF) es una **descripción completa** de la variable aleatoria, los momentos cuantifican ciertas propiedades como el “valor esperado”, la “dispersión”, la “inclinación” o “lo
llano” de una *va* y son una herramienta estadística
valiosa para el análisis de su comportamiento.

## Momentos alrededor del origen u *ordinarios*

::: tip Momentos ordinarios
La función $g(X) = X^n$, $n = 0, 1, 2, \ldots$, da los momentos alrededor del origen de la variable aleatoria $X$ son:

$$
m_{n} = E\left[ X^{n} \right] = \int_{-\infty}^{\infty} x^{n} f_{x}(x) \, dx
$$
:::
**Casos especiales:**

El valor $m_0 = 1$ es el área de la función $f_x(x)$, en tanto que $m_1 = \overline{X} = E[X]$ es el valor esperado de $X$.

---

## Momentos alrededor de la media o *centrales*

::: tip Momentos centrales

Los momentos alrededor del valor medio $\overline{X}$ se llaman momentos centrales y se denotan por $\mu_n$. Son el valor esperado de la función \(g(x)= (X - \overline{X})^n , n=0,1,2,\ldots\) es decir,

$$
\mu_n = E\left[ (X - \overline{X})^n \right] = \int_{-\infty}^{\infty} (x - \overline{X})^n f_X(x) \, dx
$$
:::

**Casos especiales:**

$\mu_0 = 1$ es el áres de $f_x(x)$, mientras que $\mu_1 = 0$ 

## Clasificación de momentos

- **Momentos ordinarios** (alrededor del origen): $E[X^n]$
- **Momentos centrales**(alrededor de la media): $E[(X - \overline{X})^n]$
- **Momentos generalizados**(alrededor de un número cualquiera): $E[(X - a)^n]$
- **Momentos absolutos**(momentos alrededor del origen con los valores absolutos de la
variable aleatoria): $E[|X|^n]$

---

## Algunos momentos importantes 
Aparte de la media, algunos momentos particulares tienen nombres especiales y son los
más comúnmente utilizados para describir las variables aleatorias. Ellos son:

| Nombre                | Descripción                          |
|----------------------|--------------------------------------|
| **Varianza / Desviación estándar** | Medida de la *dispersión* |
| **Sesgo**             | Medida de la *inclinación*           |
| **Curtosis**          | Medida del *abultamiento*            |
