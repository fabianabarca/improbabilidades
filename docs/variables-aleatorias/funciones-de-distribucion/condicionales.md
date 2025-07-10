# Funciones de distribución condicionales


## Función acumulativa condicional

::: tip Definición

Sea $A$ el evento $\{X \leq x\}$ de la variable aleatoria $X$.  
La probabilidad $P(X \leq x \mid B)$ se define como la *función acumulativa condicional* de $X$, que se denota $F_X(x \mid B)$:

$$
P(A \mid B) = P(X \leq x \mid B) \triangleq F_X(x \mid B) \tag{1}
$$

$$
F_X(x \mid B) = \frac{P\left[(X \leq x) \cap B\right]}{P(B)} = \frac{P(A \cap B)}{P(B)} = P(A \mid B) \tag{2}
$$

Aplicable a variables aleatorias discretas, continuas o mixtas.
:::


El evento conjunto $\{X \leq x\} \cap B$ consiste de los resultados $s$ tales que $X(s) \leq x$ y $s \in B$.

![Mapeo evento conjunto](/img/5_mapeo_evento_conjunto.svg)

$$
\{s : X(s) \leq x \land s \in B\} = \{s_1, s_2, s_3\}
$$


## Propiedades de la función acumulativa condicional

Todas las propiedades de las funciones acumulativas ordinarias se aplican a $F_X(x \mid B)$:

1️⃣ Similar a $P(\emptyset) = 0$:  
  $F_X(-\infty \mid B) = 0$

2️⃣ Similar a $P(S) = 1$:  
  $F_X(\infty \mid B) = 1$

3️⃣ Es una probabilidad:  
  $0 \leq F_X(x \mid B) \leq 1$

4️⃣ Es no decreciente:  
  $F_X(x_1 \mid B) \leq F_X(x_2 \mid B)$ si $x_1 < x_2$

5️⃣ Probabilidad de un segmento:  
$$
P\{x_1 < X \leq x_2 \mid B\} = F_X(x_2 \mid B) - F_X(x_1 \mid B)
$$

6️⃣ Continuidad por la derecha:  
  $F_X(x^+ \mid B) = F_X(x \mid B)$

::: info Ejemplo de un evento $B$ discreto

Si solo existen los resultados elementales $B = \{b_1, b_2, b_3\}$ entonces puede existir una función acumulativa $F_X(x \mid B)$ con tres parámetros distintos, a saber
![Mapeo evento conjunto](/img/5_funcs_acum_condicionales.svg)
:::

::: info Ejemplo de tres lanzamientos de monedas I
Considere el experimento de tres lanzamientos de moneda (o el lanzamiento de tres monedas, que es equivalente porque son eventos independientes). Sea la *va* $X$ “el número total de coronas” y sea el evento $B = \{\text{más coronas que escudos}\}$.  
Determine y esboce $F_X(x \mid B)$.

El lanzamiento de monedas tiene ocho resultados distintos $(2^3)$. El evento $B$ es:

$$
B = \{\text{CCC, CCE, CEC, ECC}\}
$$

con $P(B) = \frac{1}{2}$
:::

::: info Ejemplo de tres lanzamientos de monedas II
Considere el evento conjunto $\{X \leq x\} \cap B$ y la definición

$$
F_X(x \mid B) = \frac{P(\{X \leq x\} \cap B)}{P(B)}
$$

Si $X$ es “el número total de coronas” y $B = \{\text{más coronas que escudos}\}$, entonces:

| $x$ | $\{X \leq x\} \cap B$                            | $P(\{X \leq x\} \cap B)$ | $F_{X \mid B}$ |
|--------|------------------------------------------------------|------------------------------|--------------------|
| 0      | $\{\text{EEE}\} \cap B = \emptyset$              | 0                            | 0                  |
| 1      | $\{\text{CEE, ECE, EEC, EEE}\} \cap B = \emptyset$ | 0                            | 0                  |
| 2      | $\{\text{CCE, CEC, ECC}\}$                        | 3/8                          | 3/4                |
| 3      | $\{\text{CCC, CCE, CEC, ECC}\} = B$               | 4/8                          | 1                  |

![Mapeo evento conjunto](/img/5_espacio_eventos_moneda.svg)


> **Figura:** Espacio de eventos del experimento de tres lanzamientos de moneda, junto con los eventos $X$, “el número total de coronas” y $B = \{\text{más coronas que escudos}\}$, es decir,  
> $B = \{\text{CCC, CCE, CEC, ECC}\}$


Entonces,

$$
F_X(x \mid B) =
\begin{cases}
0 & x < 2 \\
3/4 & 2 \leq x < 3 \\
1 & 3 \leq x
\end{cases}
$$

mientras que,

$$
F_X(x) =
\begin{cases}
0 & x < 0 \\
1/8 & 0 \leq x < 1 \\
1/2 & 1 \leq x < 2 \\
7/8 & 2 \leq x < 3 \\
1 & 3 \leq x
\end{cases}
$$


![Mapeo evento conjunto](/img/5_func_acum_monedas.svg)


> $X$ es “el número total de coronas” y $B = \{\text{más coronas que escudos}\}$
:::

## Casos especiales de la función acumulativa condicional

Sea el evento $B = \{X \le b\}$ (una semirrecta), donde $b$ es algún número real $-\infty < b < \infty$. Entonces,

$$
\begin{aligned}
F_X(x \mid X \le b)
&\;\triangleq\; P\bigl(X \le x \mid X \le b\bigr) \\[6pt]
&= \frac{P\bigl(\{X \le x\} \cap \{X \le b\}\bigr)}{P(X \le b)}
\end{aligned}
$$

donde $P(X \le b)\neq 0$.

Dos situaciones pueden considerarse, una es donde $X \ge b$ y la otra donde $X < b$.

**Si $b \le x$**, el evento $B = \{X \le b\}$ es un subconjunto de $A = \{X \le x\}$, de modo que $\{X \le x\}\,\cap\,\{X \le b\} = \{X \le b\}$.

![](/img/5_evento_X_leq_b.svg)

Luego,

$$
\begin{aligned}
F_X(x \mid X \le b)
&= \frac{P(\{X \le x\}\cap\{X \le b\})}{P(X \le b)} \\[4pt]
&= \frac{P(X \le b)}{P(X \le b)} = 1
\end{aligned}
$$

para $x \ge b$.

**Si $b > x$** el evento $A = \{X \le x\}$ es un subconjunto de $B = \{X \le b\}$, de modo que $\{X \le x\}\,\cap\,\{X \le b\} = \{X \le x\}$.

![](/img/5_evento_X_leq_x.svg)

Entonces,

$$
\begin{aligned}
F_X(x \mid X \le b)
&= \frac{P(\{X \le x\}\cap\{X \le b\})}{P(X \le b)} \\[4pt]
&= \frac{F_X(x)}{F_X(b)}
\end{aligned}
$$

para $x < b$.

$$
F_X(x \mid X \le b) =
\begin{cases}
\displaystyle \frac{F_X(x)}{F_X(b)} & x < b\\[8pt]
1 & x \ge b
\end{cases}
$$

cuando $B = \{X \leq b\}$, donde $b$ es algún número real $-\infty < b < \infty$.

---

::: info Ejemplo de la caída de un paracaidista
La distancia de yerro radial de aterrizajes por paracaídas medida desde el centro del blanco, es una variable aleatoria Rayleigh con $b = 800~\mathrm{m}^2$ y $a = 0$. El blanco es un círculo de radio 50 metros con un ojo de buey de radio 10 metros. Encuéntrese la probabilidad de que un paracaidista acierte en el ojo del buey si el aterrizaje es dentro del blanco.

![](/img/5_blanco_paracaidosmo.svg)


$$
\begin{aligned}
F_{X}(x) \;=\; \biggl[1 - \exp\!\Bigl(-\tfrac{x^2}{800}\Bigr)\biggr]\,u(x)
\end{aligned}
$$

![](/img/5_func_acum.svg)

La probabilidad $P(\text{dar en el ojo de buey}\mid \text{aterrizaje en el blanco})$ es:

$$
\begin{aligned}
P(\{X \le 10\}\mid \{X \le 50\})
&= \frac{P(\{X \le 10\} \cap \{X \le 50\})}{P(\{X \le 50\})}
= \frac{P(\{X\le 10\})}{P(\{X\le 50\})} \\[6pt]
&= \frac{F_{X}(10)}{F_{X}(50)}
= \frac{1 - e^{-100/800}}{1 - e^{-2500/800}}
= 0.1229
\end{aligned}
$$

> La precisión del paracaidista es tal que cerca de un **12.29 %** de aterrizajes que dan en el blanco serán dentro del ojo de buey.

:::

---

### La función acumulativa de probabilidad total

Cuando existe una partición `[1]` $\{ A_i \}$ de la cual depende otro evento $B = \{ X \le x \}$, se puede crear una probabilidad total condicional de la forma en que se hizo anteriormente.

Ahora,

$$
F_X(x) \;=\; \sum_{i=1}^{N} F_X(x \mid A_i)\,P(A_i)
$$

Esta ecuación describe a $F_X(x)$ como la _suma ponderada_ de funciones de distribución condicionales.

`[1]`: Una partición es exhaustiva y sus conjuntos son mutuamente excluyentes.

---

::: info Ejemplo de chips de memoria defectuosos (Probabilidad total condicional)
En la manufactura automatizada de chips de memoria de computadoras, la compañía Evil Corp. produce y vende un chip defectuoso por cada cinco chips buenos. Los chips defectuosos (CD) tienen un tiempo de fallo X que obedece la CDF

$\displaystyle F_X(x \mid CD) = \bigl(1 - e^{-x/2}\bigr)\,u(x)$ ($x$ en meses)

mientras que el tiempo de fallo de los chips buenos (CB) sigue la función de distribución de probabilidad acumulativa

$\displaystyle F_X(x \mid CB) = \bigl(1 - e^{-x/10}\bigr)\,u(x)$ ($x$ en meses)

![](/img/5_func_acum_chips.svg)

[Figura](/img/5_func_acum_chips.svg): La función acumulativa de $X$, tiempo de fallo, demuestra que, cuando el chip es defectuoso, $F_X(x \mid CD)\approx 1$ prácticamente antes de los 10 meses, mientras que, cuando está bueno, la probabilidad casi segura de fallo se alcanza alrededor de la semana 40: $F_X(40 \mid CB)\approx 1$.

Visualmente, los chips malos son irreconocibles de entre los buenos. Un chip es comprado. ¿Cuál es la probabilidad de que el chip fallará antes de seis meses de uso?

La distribución de probabilidad *incondicional* para el chip es

$$
\begin{aligned}
F_X(x) \;=\; F_X(x \mid CB)\,P(CB)\;+\;F_X(x \mid CD)\,P(CD)
\end{aligned}
$$

donde $P(CB)$ y $P(CD)$ son las probabilidades de seleccionar un chip bueno y uno malo, respectivamente. Entonces

$$
\begin{aligned}
F_X(6) &= \bigl(1 - e^{-0.6}\bigr)\,\frac{5}{6}\;+\;\bigl(1 - e^{-3}\bigr)\,\frac{1}> >{6} \\
&= 0.158 \;+\; 0.376 \;=\; 0.534
\end{aligned}
$$

![](/img/5_func_acum_chips_2.svg)

[Figura](/img/5_func_acum_chips_2.svg): Función acumulativa de $X$, $F_X(x)$ junto al caso de chips defectuosos, $F_X(x \mid CD)$, y de chips buenos, $F_X(x \mid CB)$. Como hay más chips buenos que defectuosos, la función acumulativa total se acerca más a la de los chips buenos.
:::


# Función de densidad condicional, $f_{X}(x \mid B)$

La función de densidad condicional es una nueva función de densidad, de propiedades idénticas, que asume la existencia de un evento condicionante. En la práctica, al igual que la función acumulativa, puede servir para modelar los distintos escenarios ante diferentes cursos de acción (decisiones, sucesos, otros eventos aleatorios, etc.).


::: tip Función de densidad condicional
De manera similar a la función de densidad ordidnaria (o incondicional):

$$
f_{X}(x \mid B) = \frac{\mathsf{d}}{\mathsf{d}x}F_{X}(x \mid B)
$$

Si $F_{X}(x \mid B)$ contiene discontinuidades tipo escalón, como cuando $X$ es una variable aleatoria discreta o mixta, habrá funciones impulso en $f_{X}(x \mid B)$ a causa de las derivadas en las discontinuidades.
:::

## Propiedades

Todas las propiedades de las funciones de densidad ordinarias se aplican a $f_{X}(x \mid B)$:

- Siempre positivo:  

    $$
    f_{X}(x \mid B) \geq 0
    $$

- El área bajo la curva es unitaria:  

    $$
    \int_{-\infty}^{\infty}f_{X}(x \mid B)~\mathrm{d}x = 1
    $$

- Probabilidad en un intervalo:  

    $$
    P\{x_1 < X \leq x_2 \mid B\} = \int_{x_1}^{x_2}f_{X}(x \mid B)~\mathrm{d}x
    $$

- Función acumulativa a partir de función de densidad:  

    $$
    F_{X}(x \mid B) = \int_{-\infty}^{x}f_{X}(v \mid B)~\mathrm{d}v
    $$

---

::: info Ejemplo del primer cliente de una tienda
Sea $H$ una variable aleatoria que representa la hora a la que llega el primer cliente a un comercio particular. Su distribución cambia según sea el día $D$ de la semana. La función $f_H(h \mid D)$ es una distribución normal con los siguientes parámetros:

$$
    f_H(h \mid D) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{- \frac{\left(h - \mu \right)^2}{2\sigma^2}} \quad \text{con}
    \begin{cases}
        \mu = 8, \sigma^2 = 4 & \text{si } D = \text{días laborales} \\
        \mu = 12, \sigma^2 = 4 & \text{si } D = \text{fines de semana} \\
        \mu = 16, \sigma^2 = 4 & \text{si } D = \text{feriados} \\
    \end{cases}
$$

![Funciones de densidad condicional para distintos días](images/5_densidad_cond.svg)

> Este ejemplo muestra cómo una misma variable aleatoria puede tener distintas funciones de densidad dependiendo del evento condicionante.
:::
