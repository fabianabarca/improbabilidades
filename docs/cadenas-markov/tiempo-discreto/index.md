# Cadenas de Markov en tiempo discreto

## Condiciones

- Considérese un sistema que puede estar en cualquiera de varios estados.
- El conjunto de estados es denominado el espacio de estados _S_ y se supondrá en general que _S = {0, 1, 2, ..., N}_.
- Supóngase ahora que una \emph{partícula} es libre de saltar entre los estados del espacio de estados _S_. Su localización al tiempo _t_ es _X<sub>t</sub>_.
- De esta forma se tiene un proceso estocástico $\{X_{t}\}_{t=0}^{\infty}$.
- La localización _X<sub>t</sub>_ se mide solamente en los **tiempos discretos** _t_ = 0, 1, 2, ....
- _X<sub>0</sub>_ es la localización en el tiempo* 0*.

## Suposiciones

::: tip Propiedad de Markov
Suponga que la partícula está en el estado _i_ en el tiempo _t_. La probabilidad que brinque a otro estado _j_ depende solamente de _i_. Matemáticamente, sea _i, j, i<sub>{t-1}</sub>, ..., i<sub>0</sub> ∈ S_. Entonces para cualquier tiempo $t$:

$$
\begin{aligned}
& P(X_{t+1} = j \mid X_{t} = i, X_{t-1} = i_{t-1}, \ldots, X_{0} = i_{0}) \\
& \qquad = P(X_{t+1} = j \mid X_{t} = i)
\end{aligned}
$$

Es decir, el futuro (tiempo _t+1_), dado el presente (tiempo _t_), es independiente del pasado (tiempos _t-1, ..., 0_). La probabilidad anterior es la probabilidad de transición o de salto del estado _i_ al estado _j_.
:::

Las probabilidades de transición descritas son:

- **Independientes de los estados pasados** una vez que se conoce donde la partícula está ahora.
- **Independientes de _t_** el momento en que hace la transición.

::: tip Homogeneidad en Tiempo

$$
P(X_{t+1} = j \mid X_{t} = i) = \Pi_{i,j}
$$

_Π<sub>i, j</sub>_ es la probabilidad de transición del estado _i_ al estado _j_
:::

::: tip Cadena de Markov de tiempo discreto homogénea
Consiste de una partícula que salta en cada unidad de tiempo entre estados en un espacio de estados _S_. _X<sub>t</sub>_ denota el estado ocupado en el tiempo _t_ para _t = 0, 1, 2, ..._
:::

Si la partícula está en el estado _i_ al tiempo _t_, estará en el estado _j_ en el tiempo _t+1_ (sin importar los estados ocupados antes del tiempo _t_) con probabilidad

$$
\Pi_{i,j} = P(X_{t+1} = j \mid X_{t} = i)
$$

::: info Cadena de Markov de tiempo discreto
Sea _S = {0, 1}_ con probabilidades de transición dadas por:

$$
\Pi_{0,0} = 1/3 \qquad \Pi_{0,1} = 2/3 \qquad \Pi_{1,0} = 1/4 \qquad \Pi_{1,1} = 3/4
$$

Su representación gráfica es:

![Cadena de Markov de tiempo discreto.](/img/20_cadena_markov_discreta.svg)

También se suele representar la misma información dada en la ecuación

$$
\Pi_{0,0} = 1/3 \qquad \Pi_{0,1} = 2/3 \qquad \Pi_{1,0} = 1/4 \qquad \Pi_{1,1} = 3/4
$$

pero de forma matricial:

$$
\Pi = \left[ \begin{array}{ll}
1/3 & 2/3 \\
1/4 & 3/4
\end{array} \right]
$$

:::

Hay una manera estándar de escribir las probabilidades de salto _Π<sub>i, j</sub>_ como una matriz, a la que se le llama la matriz de transición _Π_. El elemento en su _i_-ésima fila y _j_-ésima columna es _Π<sub>i, j</sub>_, la probabilidad que la partícula salte de _i_ a _j_.

$$
  \Pi = \left[ \begin{array}{ccccc}
  \Pi_{0,0} & \Pi_{0,1} & \Pi_{0,2} & \cdots & \Pi_{0,N} \\
  \Pi_{1,0} & \Pi_{1,1} & \Pi_{1,2} & \cdots & \Pi_{1,N} \\
  \vdots    & \vdots    & \vdots    & \ddots & \vdots    \\
  \Pi_{N,0} & \Pi_{N,1} & \Pi_{N,2} & \cdots & \Pi_{N,N}
  \end{array}
  \right]
$$

Nótese que la _i_-esima fila de la matriz _Π_ muestra las probabilidades de salto **del** estado _i_, la _j_-ésima columna muestra las probabilidades de salto **al** estado _j_.

::: tip Matriz de transición
Sea _Π_ una matriz de transición de una cadena de Markov. Entonces,

- _0 \leq Π<sub>i, j</sub> \leq 1_ para todo _i, j_ en el espacio de estados _S_.
- _Π_ tiene filas que suman 1:

$$
\sum_{j = 0}^N \Pi_{i,j} = \sum_{j =0}^{N} P(X_{t+1} = j \mid X_{t} = i) = 1
$$

:::

## Cadena de Markov de tres estados

::: info Cadena de Markov de tiempo discreto
En una cadena de Markov hay tres estados: _S = {0, 1, 2}_. Del estado 0 la partícula salta a los estados 1 o 2 con una idéntica probabilidad de 1/2. Del estado 2, la partícula debe saltar al estado 1. El estado 1 es absorbente: una vez que la partícula entre al estado 1, no puede salirse. Dibuje el diagrama y escriba la matriz de transición.

$$
\Pi = \left[ \begin{array}{ccc}
0 & 1/2 & 1/2 \\
0 & 1   & 0   \\
0 & 1   & 0
\end{array}
\right]
$$

Su representación gráfica es:

![Cadena de Markov de tiempo discreto.](/img/20_estados_0-1-2.svg)

:::

::: tip Estado absorbente
El estado _i_ es absorbente si _Π<sub>i, j</sub> = 1_.
:::

Interpretado como ``la probabilidad de pasar del estado _i_ al mismo estado _i_ es del 100 %''.

::: info Un paseo aleatorio sobre _S = {0, 1, 2, ..., N}_
De cualquiera de los estados **interiores** _1, 2, ..., N-1_, la partícula salta a la derecha al estado _i+1_ con probabilidad _p_ y hacia la izquierda al estado _i-1_ con probabilidad _q = 1 - p_. Es decir, para $1 \leq i \leq N-1$,

$$
\Pi_{i,i+1} = p, \qquad \Pi_{i,i-1} = q, \qquad \Pi_{i,j} = 0 \text{ para $j \neq i\pm 1$}
$$

¿Cuál es la matriz de transición y el diagrama de saltos?

Esto corresponde al siguiente juego: tire una moneda; si sale escudo, entonces gana un colón; si sale corona, entonces pierde un colón. En cada tiro se salta al estado _i+1_ con probabilidad _p_ o al estado _i-1_ con probabilidad _q_, con _i_ colones al presente. A este ``juego'' se le conoce como **la ruina del apostador**.

> Pueden considerarse tres casos diferentes acerca de la conducta de la partícula en los estados frontera 0 y _N_.

**Caso 1:** Ambos estados frontera podrían ser **absorbentes**, en cuyo caso se tendría,

$$
\Pi_{0,0} = 1 \qquad \Pi_{N,N} = 1
$$

$$
\Pi = \left[ \begin{array}{cccccccc}
1 & 0 & 0 & 0 & \cdot & \cdot & \cdot & 0 \\
q & 0 & p & 0 & \cdot & \cdot & \cdot & 0 \\
0 & q & 0 & p & \cdot & \cdot & \cdot & 0 \\
\cdot & \cdot & \cdot & \cdot & \cdot & \cdot & \cdot & \cdot \\
0 & 0 & 0 & 0 & \cdot & q     & 0     & p \\
0 & 0 & 0 & 0 & \cdot & \cdot & \cdot & 1
\end{array}
\right]
$$

Esto corresponde a las situaciones en que el juego acabó dado que se quedó sin dinero o si se ha ganado el dinero de los oponentes.

**Caso 2:** Ambos estados frontera podrían ser **reflectores**, en cuyo caso se tendría,

$$
\Pi_{0,1}  = 1 \qquad \Pi_{N,N-1} = 1
$$

Esto corresponde al caso cuando mi oponente me da uno de sus colones cuando quedo con los bolsillos vacíos, o inversamente. Y que siga el juego.

**Caso 3:** Los estados frontera podrían ser **parcialmente reflectores**, en cuyo caso se tendría,

$$
\Pi_{0,0} = r, \quad \Pi_{0,1} = 1 - r, \quad \Pi_{N,N} = s, \quad \Pi_{N,N-1} = 1 - s
$$

La correspondiente matriz de transición estaría dada por

$$
\Pi = \left[ \begin{array}{ccccccccc}
r & 1- r & 0 & 0 & 0 & \cdot & \cdot & \cdot & 0 \\
q & 0    & p & 0 & 0 & \cdot & \cdot & \cdot & 0 \\
0 & q    & 0 & p & 0 & \cdot & \cdot & \cdot & \cdot \\
\cdot & \cdot & \cdot & \cdot & \cdot & \cdot & \cdot & \cdot & \cdot \\
    0 & 0    & 0 & 0 & 0 & \cdot & q     & 0     & p \\
    0 & 0    & 0 & 0 & 0 & \cdot & \cdot & 1 - s & s
\end{array}
\right]
$$

El caso 3 incluye los dos casos anteriores para valores particulares de _r_ y _s_.

![Cadena de Markov de tiempo discreto.](/img/20_paseo_aleatorio.svg)

:::

::: info Proceso de renovación
Considérese un componente cuya edad puede ser 0 o 1 o 2 ...

- Edad 0 significa _acabado de instalar_. Supóngase que no importa qué tan viejo el componente es, se estropeará durante el próximo intervalo de tiempo con probabilidad _q_ o continuará operando con probabilidad _p = 1 - q_. Así, el componente sigue la propiedad de la carencia de memoria.
- El espacio de estados es _S = \{0, 1, 2, ...}_ y el estado del sistema es la edad del componente instalado. Suponga que tan pronto como el componente se averíe, es reemplazado instantáneamente y entonces el estado del sistema se vuelve cero. La transición del estado 0 al estado 0 ocurre si el componente recién instalado se avería inmediatamente.

$$
\Pi = \left[ \begin{array}{ccccccc}
q & p & 0 & 0 & \cdot & \cdot & \cdot \\
q & 0 & p & 0 & 0 & \cdot & \cdot \\
0 & q & 0 & p & 0 & \cdot & \cdot \\
\cdot & \cdot & \cdot & \cdot & \cdot & \cdot & \cdot
\end{array}
\right]
$$

- Véase que el espacio de estados _S_, en este caso, si bien discreto, tiene infinitamente muchos estados.
- Este modelo recibe también el nombre de modelo de nacimiento o de desastre. Algunas aplicaciones son evidentes: tiempos de vida de componentes. Hay una que no es tan obvia: las noticias se apilan en una pizarra de avisos a una razón más o menos constante hasta que alguien decide tirarlas todas.
- El estado del sistema es el número de días desde la última vez que la pizarra fue limpiada. Si la limpieza de la pizarra se hace aleatoriamente, independiente de cuantas noticias haya o del tiempo desde la última limpieza, la pizarra será limpiada en la próxima unidad de tiempo con una probabilidad constante _q_.
  :::

## La matriz de transición de orden $t$

La matriz de transición $\Pi$ muestra las probabilidades de transición $\Pi_{i,j}$. Supóngase que se necesita encontrar probabilidades tales como:

$$
  P(X_{t+3} = j \mid X_{t} = i)
$$

de que la partícula estará en estado $j$ tres saltos desde el estado actual $i$.

> Si las probabilidades de transición de un paso $\Pi_{i,j}$ son las entradas de la matriz $\Pi$, ¿cómo puede encontrarse las probabilidades de tres pasos, y más generalmente, las probabilidades de $t$ pasos?

::: tip Matriz de transición de orden $t$
La matriz de transición de orden $t$ es $\Pi^{t}$, cuya entrada $(i, j)$ es:

$$
\Pi_{i,j}^t = P(X_{t} = j \mid X_{0} = i)
$$

que es la probabilidad de saltar de $i$ a $j$ en $t$ pasos.
:::

La homogeneidad en el tiempo (el hecho de que las probabilidades de transición no dependan de $t$) implica que, no obstante el tiempo $\mu \geq 0$:

$$
  P(X_{t+\mu} = j \mid X_{\mu} = i) = \Pi_{i,j}^{t}
$$

O sea, las probabilidades de transición de $t$ pasos dependen solamente de la diferencia de tiempo.

## Visualización de la transición de estados

Un algoritmo general se necesita para hallar la matriz de transición $\Pi^{t}$ de orden $t$ para cualquier matriz $\Pi$ de una cadena de Markov dada.

![Cadena de Markov de tiempo discreto](/img/20_cadena_markov_discreta.svg)

Para hallar la matriz de transición de orden $t+1$ a partir de la de orden $t$, se usan las suposiciones de Markov básicas.

- Supóngase que la partícula empieza en estado $i$ en el tiempo 0, es decir, $X_0 = i$.
- Para que la partícula esté en el estado $j$ en el tiempo $t+1$, debe haber atravesado algún estado $k$ en el tiempo intermedio $t$, es decir, $X_0 = i \longrightarrow X_t = k \longrightarrow X_{t+1} = j$.

El objetivo es encontrar una expresión para $\Pi_{i,j}^{t+1}$.

$$
\begin{aligned}
  \Pi_{i,j}^{t+1} & = P(X_{t+1} = j \mid X_{0} = i) \\
                  & = \sum_{k=0}^{N} P(X_{t+1} = j \text{ y } X_{t} = k \mid X_{0} = i) \\
               	  & = \sum_{k=0}^{N} P(X_{t+1} = j \mid X_{t} = k \text{ y } X_{0} = i)P(X_{t} = k \mid X_{0} = i) \\
                  & = \sum_{k=0}^{N} P(X_{t+1} = j \mid X_{t} = k)P(X_{t} = k \mid X_{0} = i) \\
                  & = \sum_{k=0}^{N} \Pi_{i,k}^{t} \Pi_{k,j}
\end{aligned}
$$

- La primera igualdad es por definición de la matriz de transición de orden $t$.
- La segunda igualdad viene de particionar donde la partícula estaba en el tiempo $t$.
- La tercera igualdad viene de la regla de probabilidad condicional:
  $$
    P(A \cap B \mid C) = P(A \mid B \cap C)P(B \mid C)
  $$
- La cuarta igualdad usa la propiedad de Markov, donde la probabilidad de transición solo depende del estado anterior.
- La quinta igualdad se obtiene por definición de las matrices de transición y por la propiedad de homogeneidad.

::: warning
Falta la transcripción de 5_20_3_markov_discreto.md
:::
