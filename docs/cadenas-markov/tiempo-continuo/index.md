# Cadenas de Markov en tiempo continuo

## Definición de cadenas de Markov

### Ejemplos de "cadenas de Markov"

* Un modelo simplista del tiempo atmosférico en un lugar está dado por la secuencia temporal {X<sub>1</sub>, X<sub>2</sub>, X<sub>3</sub>, ...}, donde X<sub>i</sub> tiene los dos únicos valores 0 ("seco") y 1 ("lluvioso").

![](/img/18_modelo_simplista_tiempo.svg)

* Los precios de las acciones de una empresa tienen una incertidumbre respecto a si el precio va a hacer una *transición* hacia un valor mayor o menor.

> En ambos casos, las **transiciones** pueden modelarse de manera probabilística y es crucial el conocimiento del estado actual. Las cadenas o procesos de Markov son un modelo de *dependencia*.

**Otros ejemplos de aplicaciones**
* Predicción de cambios en la demanda de electricidad
* Modelado del movimiento de insectos
* Monitoreo del uso de camillas en hospitales
* Personas que cambian de servicio celular
* Monitoreo de patrones de navegación web para proveer anuncios personalizados

## La propiedad de Markov

* Las cadenas de Markov son **procesos estocásticos** que cumplen la *propiedad de Markov*.
* Informalmente, esta propiedad establece que los estados futuros dependen únicamente del estado actual, y no de la secuencia de estados para llegar ahí. De algún modo, “trunca la memoria”.

::: tip Propiedad de Markov o de la falta de memoria

Formalmente, es una *probabilidad condicional* de la forma

$$
P(X_n = x \mid X_0, \dots, X_{n-1}) = P(X_n = x \mid X_{n-1}), \quad \forall n, \forall x
$$
:::

::: info Ejemplo de taxis en diferentes zonas de una ciudad I

Una ciudad tiene tres diferentes “zonas”, numeradas 1, 2 y 3, y los taxis operan en todas
las zonas.

![](/img/18_estados_zonas.svg)

La probabilidad de que el próximo pasajero vaya hacia una zona particular depende de ¿Dónde abordó el taxi?
:::

## La distribución exponencial como “tiempo de vida”

> La distribución exponencial es la típica caracterización de la probabilidad de los tiempos de espera (o “de vida”).

Si *T* es el tiempo de vida de un componente que está exponencialmente distribuido con parámetro α, entonces *T* tiene densidad

$$
f_{T}(t) =
\begin{cases}
  0 & \text{si } t < 0 \\
  \alpha e^{-\alpha t} & \text{si } t > 0
\end{cases}
$$

La media de *T* es el recíproco del parámetro $\alpha$, $E[T] = \frac{1}{\alpha}$.
* La variable aleatoria T tiene la *propiedad de falta de memoria*
* “No importa la antigüedad del componente, este opera como si fuera nuevo”.

## Propiedad de falta de memoria de la distribución exponencial

La propiedad de falta de memoria, matemáticamente, se escribe como

$$
P(T > t + s \mid T > t) = P(T > s)
$$

para tiempos $t, s \geq 0$. También se tiene que

$$
P(T > t) = e^{-\alpha t}
$$

para $t \geq 0$ (porque $F_T(t) = 1 - e^{-\alpha t}$).

A partir de estas definiciones, se determinan dos casos específicos.

> Por ejemplo, T podría ser “el tiempo de espera de un autobús”, y s = 5 min y t = 30 min.

## Primer hecho
### Densidad de la variable mínima de un conjunto de variables aleatorias

* Supóngase que *T<sub>1</sub>*, *T<sub>2</sub>*, . . ., *T<sub>n</sub>* son variables aleatorias independientes, cada una
distribuida exponencialmente. Supóngase que *T<sub>i</sub>* tiene parámetro *α<sub>i</sub>*.
* Suponga *N* componentes que se “conectan” (o “inician su operación conjunta”) al tiempo *t* = 0.
* *T<sub>i</sub>* es el tiempo de vida del *i*-ésimo componente.
* Sea *M* el mínimo de todos los tiempos *T<sub>i</sub>* ’s de los componentes. *M* es el tiempo en que el primer componente falla.
* *M* es una variable aleatoria.

* Sea *t* ≥ 0. Entonces *M* = min{*T<sub>1</sub>*, . . . , *T<sub>N</sub>*} es más grande que *t* si y solo si **todo** $T_i > t$.

$$
\begin{aligned}
  P(M > t) &= P\left( \min\{T_{1}, T_{2}, \ldots, T_{N}\} > t \right) \\
  &= P(T_{1} > t, T_{2} > t, \ldots, T_{N} > t) \\
  &= e^{-\alpha_{1}t} \cdot e^{-\alpha_{2}t} \cdots e^{-\alpha_{N}t} \\
  &= e^{-(\alpha_{1} + \alpha_{2} + \ldots + \alpha_{N})t}
\end{aligned}
$$

> *M* está exponencialmente distribuida con parámetro $α_1 + α_2 + . . . + α_N$ y valor medio $1/(α_1 + α_2 + . . . + α_N$).

## Segundo hecho
### Probabilidad de que un componente dado sea el que falle

Ante la pregunta,
    *¿Cuál es la probabilidad de que, cuando el primer fallo suceda, sea el componente j-ésimo?*

La probabilidad de que entre las *N* variables aleatorias *T<sub>i</sub>* el mínimo sea *T<sub>j</sub>* está dada por la expresión

$$
P\left( T_{j} = \min \{T_{1}, T_{2}, \ldots, T_{N}\} \right) = \frac{\alpha_{j}}{\alpha_{1} + \alpha_{2} + \cdots + \alpha_{N}}
$$

**Prueba para dos variables aleatorias**

Si $T_1$ y $T_2$ son independientes y distribuidos exponencialmente con parámetros respectivos $\alpha$ y $\beta$: $f_{T_1, T_2}(t_1, t_2) = \alpha e^{-\alpha t_1} \beta e^{-\beta t_2}, \quad \text{para } t_1, t_2 > 0.
$

Con $t_1$ y $t_2$ correspondientes a $T_1$ y $T_2$:

$$
\begin{aligned}
P\left( T_1 = \min\{T_1, T_2\} \right) &= P(T_1 < T_2) \\
&= \iint_{T_1 < T_2} f_{T_1, T_2}(t_1, t_2) \, dt_1 \, dt_2 \\
&= \int_{0}^{\infty} \int_{0}^{t_2} \alpha e^{-\alpha t_1} \beta e^{-\beta t_2} \, dt_1 \, dt_2 \\
&= \int_{0}^{\infty} \left( 1 - e^{-\alpha t_2} \right) \beta e^{-\beta t_2} \, dt_2 \\
&= 1 - \frac{\beta}{\alpha + \beta} = \frac{\alpha}{\alpha + \beta}.
\end{aligned}
$$

---

## El proceso de nacimiento y muerte en tiempo continuo

"Nacimiento" y "muerte" es una analogía  tétrica que puede interpretarse también como "aparición y desaparición" o "llegada y salida"o "llegada" y "salida" o "unión" y "separación" o "haciendo fila y listo el trámite"...

![Llegada y salida de entidades](/img/18_llegada_salida.svg){ style="display: block; margin: auto;" }



* Considérese una “máquina” que puede estar en cualquiera de varios estados en
cada instante de tiempo $t \geq 0$.
* El conjunto de estados posibles, el espacio de estados S, será siempre discreto:

$$
S = \{0, 1, 2, \ldots, N\} \quad \text{o} \quad S = \{0, 1, 2, \ldots\}
$$

* Al tiempo t, el estado de la máquina es denotado por $X_t$.

> Por ejemplo, $X_t$ podría denotar el número de animales en una poza para beber.  
> El estado de la máquina es el número $X_t$ de animales al tiempo $t$.

### Suposiciones básicas

**1.** Si al tiempo $t$ la máquina está en el estado $i$, permanece en ese estado por un  
tiempo aleatorio que es exponencialmente distribuido con parámetro $\Omega_i$.

- El tiempo de espera promedio en el estado $i$ es el recíproco $1 / \Omega_i$  
- $\Omega_i$ depende del estado $i$, pero no depende de otros estados anteriores  
- El estado $i$ pudiera ser **absorbente**: una vez que la máquina entra al estado $i$, permanecerá siempre ahí  
- En este caso, $\Omega_i = 0$ y el tiempo de espera promedio es $1 / \Omega_i \rightarrow \infty$

**2.** Cuando la máquina sale del estado $i$, cambia al estado $i + 1$ o al estado $i - 1$  
(habían 9 vacas, luego hay 8 si se va una, o 10 si llega otra). Sea

$$
\begin{align}
p_i &= P(\{\text{próximo estado es } i + 1 \mid \text{último estado es } i\}) \notag \\
q_i &= 1 - p_i \notag \\
    &= P(\{\text{próximo estado es } i - 1 \mid \text{último estado es } i\})
\end{align}
$$



Entonces $p_i$ y $q_i$ dependen solamente del estado $i$ y no de otros detalles del proceso  
(tales como el tiempo $t$, la duración en $i$ o el estado antes de $i$).


![Diagrama de transición de estados en el proceso de nacimiento y muerte](/img/18_estados_nacimiento_muerte.svg)

El proceso estocástico $\{X_t\}_{t=0}^\infty$ es un registro completo de los estados ocupados por la máquina para todos los tiempos $t \geq 0$.

## Propiedad de la falta de memoria

Dado el presente estado $X_t$ del sistema al tiempo $t$, los estados futuros de la máquina no  
dependen de los estados pasados.

- En particular, si el estado al tiempo $t$ es $X_t = i$, entonces es completamente  
irrelevante si ha estado en el estado $i$ por varios años o si acaba de cambiar al  
estado $i$, para predecir cuándo se mudará del estado $i$.

- Dado que la distribución exponencial sigue la propiedad de la falta de memoria,  
  la máquina se comporta como si acabara de moverse al estado $i$ a pesar de qué tan  
  largo hubiera realmente ocupado el estado $i$.

- La distribución exponencial es la única distribución continua concentrada en  
  $[0, \infty[$ para los tiempos de espera que tiene esta propiedad.

Nótese que si $\Omega_i = 0$ para el estado $i$, entonces los valores de $p_i$, $q_i$ son innecesarios de especificar dado que la máquina no puede cambiar del estado $i$ una vez en él.

## Proceso de nacimiento y muerte en tiempo continuo
### Síntesis

Consiste de una máquina que puede cambiar entre estados en un espacio de estados $S$.

- $X_t$ denota el estado ocupado al tiempo $t$ para $t \geq 0$.

- La máquina permanece en el estado $i$ por un período de tiempo indeterminado  
  (llamado tiempo de espera o permanencia) que es exponencialmente distribuido  
  con parámetro $\Omega_i$ (tiempo de espera promedio $1 / \Omega_i$).

- Cuando la máquina cambia, cambia a los estados $i + 1$, $i - 1$ con probabilidades  
  respectivas $p_i$, $q_i = 1 - p_i$.

::: danger
Faltan 2 transcripciones:
- 5_18_3_teoria_de_colas.md
:::
