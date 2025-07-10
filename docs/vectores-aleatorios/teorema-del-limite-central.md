# Teorema del límite central

::: warning 
Se dieron algunos errores en la transcripción 3_12_1_limite_central_sumas.md
:::

## El teorema del límite central para sumas

::: tip Definición de la convergencia en la distribución

Considérese $X_1, \ldots, X_N$ variables aleatorias *independientes e idénticamente distribuidas* ($i.i.d.$), con media común $\mu_{X_i} = \mu$ y desviación estándar $\sigma_{X_i} = \sigma$. Sea además:

$$
S_N = X_1 + \cdots + X_N
$$

la **suma** de ellas. Según el teorema del límite central, $S_N \sim \mathcal{N}(N \mu, N \sigma^2)$ conforme $N \to \infty$. Alternativamente, si $Z$ es una distribución *normalizada* de $S_N$:

$$
Z = \frac{S_N - \mu_{S_N}}{\sigma_{S_N}} = \frac{S_N - N\mu}{\sigma \sqrt{N}}
$$

entonces $Z$ tiene una distribución $f_Z(z)$ que aproxima a $\mathcal{N}(0,1)$ conforme $N \to \infty$.
:::

> **Nota**: $\mathcal{N}(0,1)$ es una función de distribución gaussiana de media 0 y varianza 1, donde $\mathcal{N}$ alude a "normal".

---

## Visualización del teorema del límite central para sumas

### Caso 1: convolución de la función de densidad

$f_{S_N}(x_1,\ldots,x_N) = f_{X_1}(x_1) \ast \cdots \ast f_{X_N}(x_N)$

![](/img/12_TLCconv.svg)

### Caso 2: simulación de la suma de datos aleatorios generados de $N$ va $X_i \sim \mathsf{exponencial}(1)$

![](/img/12_TLCsuma.svg)



## Deducción de la media y desviación estándar para la suma de va

**Con respecto a la media de $S_N$**

$$
\begin{aligned}
E \left[S_N \right] & = E\left[ X_1 + X_2 + \cdots + X_N \right] \\
  					& = \mu + \mu + \cdots + \mu \\
  					& = N\mu
\end{aligned}
$$

Lo anterior se justifica porque $E[X_i] = \mu$.

**Con respecto a la desviación estándar de $S_N$**

$$
\begin{aligned}
{\sigma_{S_N}}^2 	& = E \left[ \left( S_N - \overline{S_N}\right)^2 \right] \\
               		& = E \left[ {S_N}^2 \right] - \left( E\left[ S_N \right] \right)^2
\end{aligned}
$$

De la última identidad, se conoce el segundo término, que es la media de $S_N$ al cuadrado. Con respecto al primer término,

$$
\begin{aligned}
  E\left[ {S_N}^2 \right] & = E\left[ \left( X_1 + X_2 + \cdots + X_N \right)^2 \right] \\
                      & = E\left[ (X_1 + X_2 + \cdots + X_N)(X_1 + X_2 + \cdots + X_N)\right] \\
                      & = E\left[ X_{1}^2 + X_1 X_2 + X_1 X_3 + \cdots X_1 X_N + \cdots + \ldots \right. \\
                      & \qquad \left. \ldots + X_N X_1 + X_N X_2 + \cdots + X_N X_{N-1} + X_{N}^2 \right] \\
                      & = \sum_{i=1}^N E[X_{i}^2] + \sum_{i=1}^N \sum_{j=1, j \neq i}^N E[X_i]E[X_j] \\
                      & =  N (\sigma^2 + \mu^2) + N(N-1)\mu^2 \\
                      & = N \sigma^2 + N\mu^2 + N^2\mu^2 - N\mu^2 \\
                      & = N\sigma^2 + N^2\mu^2
\end{aligned}
$$

Finalmente,

$$
\begin{aligned}
  {\sigma_{S_N}}^2 & = E \left[ {S_N}^2 \right] - \left( E\left[ S_N \right] \right)^2 \\
         	& = N\sigma^2 + N^2\mu^2 - N^2\mu^2 \\
        	& = N\sigma^2
\end{aligned}
$$

de donde se obtiene que la desviación estándar es $\sigma_{S_N} = \sigma \sqrt{N}$.

Así se plantea, como antes,

$$
Z = \frac{S_N - N\mu}{\sigma \sqrt{N}}
$$


::: info Ejemplo de los resistores en serie


Los resistores tienen una resistencia *nominal* y un porcentaje de *tolerancia*. Por ejemplo, un resistor de 330 ohm con una tolerancia del 5 % se espera que tenga una resistencia entre 313,5 y 346,5 ohm.

> Considérense cinco resistores de 330 ohm, escogidos aleatoriamente de una población 
con 5 % de tolerancia, y modélese la resistencia de cada una como una distribución 
uniforme en $[313.5 \quad 346.5]$. Si son conectados en serie, ¿cuál es la distribución 
de la resistencia $R$ del sistema, dada por $R = X_1 + \ldots + X_5$? Los $X_i$ son los 
valores de resistencia (i.i.d.).


Una variable aleatoria uniformemente distribuida en $[a \quad b]$ tiene media $\mu = (a + b)/2$ y desviación estándar $\sigma = (b - a) / \sqrt{12}$. Para **cada resistencia**:

- la media es $E[X_i] = (313.5 + 346.5)/2 = 330~\Omega$, es decir, la resistencia nominal
- la desviación estándar es $\sigma = (346.5 - 313.5) / \sqrt{12} = 9.529~\Omega$

La resistencia **del sistema en serie** tiene una media y desviación estándar de

$$
\begin{aligned}
E[R] 	&= N\mu = 5 \cdot 330 = 1650~\Omega\\
SD[R] 	&= \sqrt{N} \sigma = \sqrt{5} \cdot 9.529 = 21.3~\Omega
\end{aligned}
$$


¿Cómo es la distribución de probabilidad de $R = X_1 + \ldots + X_5$? ¿Es $R$ también distribuido uniformemente? Una simulación de 10 000 instancias distintas de $R$ muestra:

![Distribución suma resistores](/img/12_dist_resistores.svg)

que es una muy buena aproximación de $\mathcal{N}(\mu,\sigma) = \mathcal{N}(1650,21.3)$.
:::

---

::: info Ejemplo de la revisión de formularios antes del mediodía
> Hay 40 formularios por revisar. Por los años de experiencia, la persona que los revisa sabe
que el tiempo requerido para revisar cada uno es una variable aleatoria con un valor esperado
de 6 minutos y una desviación estándar de 6 minutos. Si los tiempos de revisión son 
independientes y la persona inicia a las 7:50 a.m. revisando de forma continua, ¿cuál es la
probabilidad de que termine antes de las 12:00 m.d.?

- Recordar que $Z = \frac{S_N - N\mu}{\sigma \sqrt{N}}$
- También que $f_Z(z) \rightarrow \mathcal{N}(0,1)$
- ¿Cuánto es $N$?
- ¿Cuánto es $\mu$?
- ¿Cuánto es $\sigma$?
- ¿Cuánto es el tiempo disponible?


Para este problema, se debe aplicar el teorema del límite central para sumas, puesto que se trabajará con la suma del tiempo de revisión de todos los formularios. De la información del enunciado:

- 40 formularios: $N = 40$
- Tiempo promedio de revisión por formulario: $\mu = 6$
- Desviación estándar: $\sigma = 6$

La persona comienza a las 7:50 a.m. y para terminar antes de las 12:00 m.d. deberá hacerlo en menos de 250 minutos. El objetivo es, por tanto, encontrar $P(S_N \leq 250)$, o de forma equivalente, $P(Z \leq Z_0)$, donde

$$
Z_0 = \frac{S_0 - N \mu}{\sigma \sqrt{N}} = \frac{250 - 40 \cdot 6}{6 \sqrt{40}} = 0.263
$$

Es decir,

$$
P \left( \frac{S_N-40\cdot6}{6 \sqrt{40}}\leq \frac{250-40\cdot6}{6 \sqrt{40}}\right)
$$

$$
P \left( Z \leq 0.263 \right)
$$

Utilizando la tabla para probabilidades acumulativas para valores positivos de $Z$, el valor más cercano a $0.263$ está dado para $0.26$.

$$
P \left( Z \leq 0.263 \right) \approx P \left( Z \leq 0.26 \right) = 0.6026 \Rightarrow 60.26 \%
$$

La persona que revisa tiene un 60.26 % de probabilidad de completar la revisión de formularios antes del mediodía.

:::


### Definición de la convergencia en la media

Si $\{ X_i \}_{i=1}^N$ es una **muestra** de $N$ elementos de una **población**, su **media muestral** es $\overline{X_N} = S_N/N = \mu_N$, donde $S_N = X_1 + X_2 + \cdots + X_N$. Se puede considerar (2) para hacer 

$$
\frac{S_N - N\mu}{\sigma \sqrt{N}} \cdot \frac{1/N}{1/N} = \frac{\overline{X_N} - \mu}{\sigma / \sqrt{N}}
$$

::: tip Definición de convergencia en la media
Sean $X_1, \ldots, X_N$ una muestra de variables aleatorias $i.i.d.$ de una **población** con media común $\mu$ y desviación estándar $\sigma$ y con una **media de la muestra** $\overline{X_N}$. Entonces

$$
Z = \frac{\overline{X_N} - \mu}{\sigma / \sqrt{N}}
$$

aproxima $\mathcal{N}(0,1)$ conforme $N \rightarrow \infty$. Equivalentemente, $\overline{X_N} \sim \mathcal{N}(\mu, \sigma^2/N)$
:::

### Visualización del teorema del límite central para medias de muestras

Aunque una **población** tenga una distribución con media $\mu = E[X]$, una **realización** o **muestra** de esta distribución tendrá casi siempre un valor ligeramente distinto.

::: info Ejemplo de una distribución uniforme

Sea $X \sim \mathsf{unif}(0,1)$ con $\mu = E[X] = \mathbf{0.5}$. Sea además $X_i$ **una muestra** de esta distribución con 500 elementos y con una media estadística de $\mu_{X_i} = 0.5138 \neq 0.5$.


![](/img/12_TLCmuestra.svg){style="display:block;margin:auto;"}

Al hacer una simulación de $N$ muestras se obtienen $N$ medias distintas $\mu_{X_i}$. ¿Cómo se distribuyen estos valores alrededor de $\mu$ y cómo cambia la distribución según $N$?

![](/img/12_TLCmedias.svg){style="display:block;margin:auto;"}

> Entre más grande es $N$ más "agrupados" están los valores de la media de la muestra $\overline{X_N} = \mu_N$ alrededor de la "media verdadera" de la población, $\mu$.


![](/img/12_grupos_dots.svg){ style="display:inline-block; width:25%; margin-right:3%;" }
![](/img/12_medias_muestras.svg){ style="display:inline-block; width:70%;" }

:::


::: info Número de visitas mensuales al cajero automático

Suponga que el número de veces que un cliente utiliza el cajero automático de un banco en un mes es una variable aleatoria con un valor medio de 3,2 y una desviación estándar de 2,4. El banco conoce estos datos con exactitud pues puede monitorear cada visita de la **población** de sus miles de clientes.

> Si se selecciona aleatoriamente una muestra de 100 clientes, ¿qué tan probable es que el promedio de veces que el cajero es utilizado en la **muestra** exceda 3,5? 

La probabilidad solicitada es $P(\overline{X_N} > 3.5)$, donde $\overline{X_N}$ es el valor medio de la muestra. La muestra es grande ($N = 100$ clientes) y por tanto la distribución de $\overline{X_N}$ se puede aproximar a una distribución normal.

$$
P(\overline{X_N} > 3.5) \approx P \left( Z > \frac{3.5 - \mu}{\sigma/\sqrt{N}} \right) = P \left( Z > \frac{3.5 - 3.2}{0.24} \right) = 1 - F_{Z}(1.25) = 0.1056
$$

La probabilidad es pequeña porque la muestra es grande y la desviación estándar de la muestra es muy pequeña, de solo 0,24, de forma tal que la media de una muestra de 100 personas se acerca "bastante" a la media de la población de quizá milesde personas.

:::

---

::: warning
Se dieron muchos errores en transcripción de 3_12_3_desigualdad_chebyshev.md
:::

## Desigualdad de Chebyshev

::: tip Premisas para la desigualdad de Chebyshev

Sea $W$ una variable aleatoria con media 0. Esta es **cualquier** VA.

![F:media_cero](/img/12_media_cero.svg)

* La media de $W$ es 0, pero cualquier realización simple de $W$ puede estar bastante alejada de 0.
* La varianza es una medida de la dispersión de los valores de $W$ alrededor de 0.
* Entre mayor el valor de la varianza de $W$, más probable es que el valor de $W$ puede estar lejos de 0.
:::

> Dada la varianza $\sigma^2$, ¿qué tan cercanos a $\mu = 0$ los valores de $W$ podrían estar?


## La desigualdad de Chebyshev

Fíjese un número $\epsilon > 0$ y búsquese la probabilidad de que $W$ está más alejada que $\epsilon$ de su media $\mu = 0$. Supóngase que $W$ tiene una función de densidad $f_W(w)$, entonces:

$$
P(\vert W \vert \geq \epsilon ) = \int_{\vert w \vert \geq \epsilon}f_W(w) dw = \int_{w^2 \geq \epsilon^2} \frac{\epsilon^2}{\epsilon^2}f_W(w) dw
$$

$f_{Xi}(X_i) = \lambda_ie^{-\lambda_iX}$

![F:epsilon](/img/12_epsilon.svg)

Es esperable que la probabilidad $P(\vert W \vert \geq \epsilon)$ debería hacerse más grande conforme $\sigma^2$ se hace más grande, puesto que los valores de $W$ están más dispersos.

$$
\begin{aligned}
\int_{w^2 \geq \epsilon^2} \frac{\epsilon^2}{\epsilon^2}f_W(w) dw & \leq \int_{w^2 \geq \epsilon^2}\frac{w^2}{\epsilon^2}f_W(w) dw \\
      & \leq \int_{-\infty}^{\infty}\frac{w^2}{\epsilon^2}f_W(w) dw \\
    & = \frac{1}{\epsilon^2}\int_{-\infty}^{\infty} w^2 f_W(w) dw \\
    & = \frac{E[W^2]}{\epsilon^2} \\
P(\vert W \vert \geq \epsilon) & \leq \frac{\sigma^2}{\epsilon^2}
\end{aligned}
$$

* La primera desigualdad es porque el intervalo de integración contiene los puntos $w$ donde $w^2 \geq \epsilon^2$ y, por lo tanto, el integrando será mayor si $\epsilon^2$ se reemplaza por $w^2$.
* La segunda desigualdad viene de aumentar el intervalo de integración de los puntos $w$ donde $w^2 \geq \epsilon^2,$ a la recta numérica de $-\infty$ a $+\infty$.
* $E[W^2]$ (el segundo momento ordinario) es igual en este caso a la varianza $\sigma^2$ (el segundo momento central) porque la media es cero y $\sigma^2 = E[W^2] - E^2[W]$.

> **Desigualdad de Chebyshev**
>
> Si $E[W] = 0$ y dado cualquier número positivo $\epsilon,$ el evento que $W$ difiera en por lo menos $\epsilon$ de cero, está acotado por la probabilidad:
>
> $$
> P(\vert W \vert \geq \epsilon ) \leq \frac{\sigma^2}{\epsilon^2}
> $$

## Generalización de la desigualdad de Chebyshev

Si $\mu = E[X] \neq 0$ pero $W = X - \mu$, entonces $E[W] = 0$, y el desarrollo anterior aplica a $X$:



::: tip **Desigualdad de Chebyshev generalizada**

Sea $X$ una VA con media finita $\mu$ y varianza finita $\sigma^2$. Entonces para $\epsilon > 0$ un número fijo, la probabilidad que $X$ difiera en a lo menos $\epsilon$ de su media, está acotada:

$$
P(\vert X - \mu \vert \geq \epsilon ) \leq \frac{\sigma^2}{\epsilon^2}
$$

O en términos del evento complementario: $P(\vert X - \mu\vert < \epsilon ) \geq 1 - \frac{\sigma^2}{\epsilon^2}$.
:::

**Comentario**: Este es un límite ``laxo'' en el sentido de que **no** es muy restrictivo y por tanto no muy preciso o informativo.

::: info Ejemplo de $\{-1,0,1\}$ para Chebyshev

Si $X$ tiene tres posibles valores: $\{ -1, 0, 1 \}$, con probabilidades $\{ \frac{1}{18}, \frac{8}{9}, \frac{1}{18} \}$, respectivamente. ¿Cuál es la probabilidad $P(\vert X - \mu \vert \geq 3\sigma)$ y cómo se compara con el límite de Chebyshev?

* Recordar que
    $$E\left[ X \right] = \sum_{i=1}^{N}x_i P(x_i)$$
* También que
    $$\sigma_{X}^{2} = E\left[ \left( X- \overline{X} \right)^2 \right] = E[X^2] - E^2[X]$$
* Siendo que
    $$P(\vert W \vert \geq \epsilon ) \leq \frac{\sigma^2}{\epsilon^2}$$
* Pero una forma equivalente es
    $$P( \vert X - \mu_X \vert \geq k\sigma_X ) \leq \frac{1}{k^2}$$


La media y la varianza de la VA discreta se obtienen de la siguiente forma:

$$
E[X] = \sum_{i=1}^{3} x_i P(x_i) = (-1)\frac{1}{18} + (0)\frac{8}{9} + (1)\frac{1}{18} = 0
$$

$$
\mathsf{Var}[X] = \sum_{i=1}^{3} (x_i - E[X])^2 P(x_i) = (-1)^2 \frac{1}{18} + (0)^2 \frac{8}{9} + (1)^2 \frac{1}{18} = \frac{1}{9}
$$

Utilizando la definición provista de la desigualdad de Chebyshev, se obtiene

$$
P( \vert X - \mu_X \vert \geq k\sigma_X ) = P( \vert X - 0 \vert \geq 3 \frac{1}{3} ) \leq \frac{1}{3^2} = \frac{1}{9}
$$


Mientras tanto, utilizando la PDF propiamente, se puede encontrar la probabilidad $P( \vert X \vert \geq 1 )$ solicitada. Considerando que solo hay tres valores posibles de $X$, $\{ -1, 0, 1 \}$, los elementos de interés son $\{ -1, 1 \}$ cuyas probabilidades son $1/18 + 1/18 = 1/9$, igual que con Chebyshev.



En general, la desigualdad de Chebyshev será mucho menos restrictiva que el análisis de la PDF, pero en este caso de ejemplo resultaron iguales.
:::


## Desigualdad de Markov

::: tip **Desigualdad de Markov**

Si $X$ es una VA con $f_X(x) = 0$ para $x < 0$, entonces $X$ es llamada una VA no-negativa, para la cual aplica la desigualdad de Markov:

$$
P(X \geq \epsilon) \leq \frac{E[X]}{\epsilon}
$$
:::

**Comentario**: En contraste con el límite de Chebyshev, que involucra tanto la media como la varianza, este límite requiere únicamente de la media de $X$.

## Prueba de la desigualdad de Markov

La consideración es ahora en relación con la definición del valor esperado (el *momento ordinario de primer orden*):

$$
\begin{aligned}
E[X] = \int_{0}^{\infty} x f_X(x) dx &\geq \int_{\epsilon}^{\infty} x f_X(x) dx \\
&\geq \int_{\epsilon}^{\infty} \epsilon f_X(x) dx = \epsilon \int_{\epsilon}^{\infty} f_X(x) dx \\
&= \epsilon P(X \geq \epsilon)
\end{aligned}
$$

::: info Ejemplo de los resistores de baja calidad

**Planteamiento**
Es posible asumir que en la manufactura de resistores eléctricos de baja calidad de 1000 $\Omega$, la resistencia promedio es en efecto de 1000 $\Omega$, según se determina por un análisis estadístico de mediciones, pero hay una gran variación alrededor de este valor. Si todos los resistores por encima de 1500 $\Omega$ deben descartarse, ¿cuál es la fracción máxima de resistores que terminarían por fuera?

* Recordar que
    $$P(X \geq \epsilon) \leq \frac{E[X]}{\epsilon}$$

:::

### **Del rigor en la ciencia — Jorge Luis Borges**

En aquel Imperio, el arte de la cartografía logró tal perfección que el mapa de una sola provincia ocupaba toda una ciudad, y el mapa del Imperio, toda una provincia. Con el tiempo, estos mapas desmesurados no satisficieron y los colegios de cartógrafos levantaron un mapa del Imperio, que tenía el tamaño del Imperio y coincidía puntualmente con él.

Menos adictas al estudio de la cartografía, las generaciones siguientes entendieron que ese dilatado mapa era inútil y no sin impiedad lo entregaron a las inclemencias del sol y los inviernos. En los desiertos del oeste perduran despedazadas ruinas del mapa, habitadas por animales y por mendigos; en todo el país no hay otra reliquia de las disciplinas geográficas.