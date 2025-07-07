# Definiciones de la probabilidad

::: warning
Primera mitad de transcripción no aceptada (posee varios errores): 1_1_1_la_probabilidad.md 
:::

## ¿Qué es y para qué sirve la probabilidad?

> **La probabilidad es una *medida* de la certidumbre de ocurrencia de un evento.**

- Permite tomar decisiones en un Universo fundamentalmente incierto.
- Es útil para tratar de:
  - **adivinar el futuro**
  - **adivinar el pasado**
- No es posible saber lo que va a pasar, pero podemos **modelar y cuantificar** lo que podemos esperar, con base en lo que ya ha sucedido.

![alt text](/img/4_covid_acumulado.svg)

## ¿Qué hace *aleatorio* a un fenómeno aleatorio? *(Nota al margen)*

Puede ser la física (a partir del principio de incertidumbre), o por ser un **sistema caótico** (extremadamente sensible a las condiciones iniciales), o por el **conocimiento imperfecto** del observador (el fenómeno podría ser predecible desde algún punto de vista, pero el observador no lo sabe).


## Aplicaciones de la probabilidad


### ¿Qué aplicaciones tiene la teoría de probabilidad?

- 🛈 Teoría de la información  
- 📶 Comunicaciones  
- 🧾 Reconocimiento de patrones  
- ⚙️ Producción industrial  
- 📈 Finanzas  
- 🏛 Política pública  
- 📚 Aprendizaje automático  
- ☁️ Meteorología  
- 🚑 Epidemias  
- 🔍 (...)


## Los conceptos de la probabilidad


### Definición clásica de Laplace

La probabilidad de un evento $A$ se define *a priori* (sin experimentación) como:

$$
\begin{aligned}
P(A) & = \frac{\text{Número de resultados favorables a }A}{\text{Número total de resultados posibles}} \\
     & = \frac{\lvert A \rvert}{\lvert S \rvert} = \frac{n(A)}{n(S)}
\end{aligned}
$$

En el caso de que todos los resultados (o *salidas*) son igualmente probables.

::: tip **El operador $P(\cdot)$**  
El operador $P(\cdot)$ es una *medida* de la certeza de la ocurrencia del evento $\cdot$ descrito.
:::
---

::: info Ejemplo de la caja con bolas blancas y rojas

Considerar una caja con $n$ bolas blancas y $m$ bolas rojas. En este caso, hay dos resultados elementales: una bola blanca o una bola roja. ¿Cuál es la probabilidad de seleccionar una bola blanca?

$$
P(\text{seleccionar una bola blanca}) = \frac{n}{n+m}
$$

:::

::: info Ejemplo de la divisibilidad por un número primo

 
Determine la probabilidad de que un número natural cualquiera es divisible por un número primo $n$.

- Si $n$ es un número primo, entonces cada $n$-ésimo número (empezando por $n$) es divisible por $n$.
- Por lo tanto, en $n$ enteros consecutivos hay un resultado favorable, y por tanto:

$$
P(\text{un número es divisible por un primo } n) = \frac{1}{n}
$$

:::

::: warning
Falta una imagen aquí
:::



## Deficiencias de la definición clásica de Laplace

$$
P(A) = \frac{\text{Número de resultados favorables a }A}{\text{Número total de resultados posibles}}
$$

- La probabilidad es utilizada para definir la probabilidad (referencia cíclica).
- No puede ser utilizado para situaciones donde los resultados no son igualmente probables.
- No puede ser utilizado para un número infinito de resultados posibles.

---

### Definición estadística de la probabilidad

::: info **Frecuencia relativa:**  
Un experimento aleatorio se realiza muchas veces, entonces la probabilidad de un evento $A$ se define como:

$$
P(A) = \lim_{n \to \infty} \frac{n(A)}{n}
$$

Donde $n(A)$ es el número de ocurrencias de $A$ y $n$ es el número total de "experimentos" o "pruebas".
:::

Este es un método común para determinación experimental de probabilidades.


## Otras probabilidades por frecuencia relativa

### Personas con obesidad

$$
\begin{aligned}
P(\text{ser obeso}) &= \frac{\text{Personas con obesidad}}{\text{Población mundial}} \\
&= \frac{725~039~900}{7~687~217~424} \approx 9.43\%
\end{aligned}
$$

### Muertes por fumado

$$
\begin{aligned}
P(\text{morir por fumar}) &= \frac{\text{Muertes por fumado}}{\text{Muertes este año}} \\
&= \frac{805~310}{9~514~900} \approx 8.46\%
\end{aligned}
$$

> **¿Es correcto decir que tengo un 9.43% de probabilidades de ser obeso y 8.46% de morir por fumar?**

*Datos de http://www.worldometers.info/es/*

---

::: info Ejemplo de la divisibilidad por un número primo


Determine la probabilidad de que un número natural cualquiera sea divisible por un número primo *n*.

- Entre los enteros $1, 2, \dots, m$, los números $n, 2n, \dots$ son divisibles por $n$.
- Por lo tanto, hay $\left \lfloor \frac{m}{n} \right\rfloor$ números divisibles por $n$ entre 1 y $ m $. Entonces:

$$
P(\text{un número es divisible por un primo } n) =
\lim_{m \to \infty} \frac{ \left\lfloor \frac{m}{n} \right\rfloor }{m} = \frac{1}{n}
$$


En el caso anterior se resolvió “analíticamente”, en este caso “probando” todos los números.

:::

## Deficiencias de la definición estadística de la probabilidad

$$
P(A) = \lim_{n\to\infty} \frac{n(A)}{n}
$$

- No se pueden realizar infinitos experimentos.
- No puede ser utilizado para un número infinito de resultados posibles.
- Asume eventos equiprobables.

---

### Definición axiomática según Kolmogorov

::: tip **Axioma:**  
Proposición o enunciado tan evidente que no requiere demostración.
:::

**Primer axioma:**

$$
P(A) \geq 0
$$

La "medida" asignada a un evento que denota su probabilidad es no negativa.

---

**Segundo axioma:**

$$
P(S) = 1
$$

La probabilidad de ocurrencia de un resultado que pertenece al conjunto universal es segura.

---

**Tercer axioma:**

$$
P\left( \bigcup_{n=1}^{N} A_n \right) = \sum_{n=1}^{N} P(A_n)
$$

En el caso especial para dos eventos, $A \cap B = \emptyset$:

$$
P(A \cup B) = P(A) + P(B)
$$

Un posible mnemónico es **PUSuP** (**P**robabilidad de la **U**nión es la **Su**ma de las **P**robabilidades)

## Nota sobre los valores de la probabilidad
### Fuente común de errores a partir de la definición axiomática


$$
\textit{primer axioma} \longrightarrow 0 \leq P(\cdot) \leq 1 \longleftarrow \textit{segundo axioma}
$$


- La medida de la probabilidad es mayor a cero
- La medida de la probabilidad es menor a uno

$$
\boxed{P(A) = 0.42} \qquad \cancel{P(A) = - 0.42} \qquad \cancel{P(A) = 1.42}
$$


## Nota sobre álgebra de conjuntos y aritmética
### Fuente común de errores 


El tercer axioma es la unión de operaciones de álgebra de conjuntos y operaciones aritméticas:

$$
P\left( \bigcup_{n=1}^{N} A_{n}\right) = \sum_{n=1}^{N} P(A_{n})
$$


- Los **eventos** tienen operaciones de **álgebra de conjuntos** pero no aritméticas (suma, resta, multiplicación, división).
- Las **probabilidades** son números ($0 < P(\cdot) < 1$) con **operaciones aritméticas**, pero no operaciones de unión, intersección, complemento.

$$
\begin{matrix}
    \cancel{\overline{P(A)}} && \boxed{P(A) + P(B)} && \cancel{P(A + B)}  \\
    \boxed{P(\overline{A})} && \cancel{P(A) \cup P(B)} && \boxed{P(A \cup B)}  
\end{matrix}
$$

::: info Ejemplo del lanzamiento de dos dados


Observar la suma de dos dados que se lanzan

$$
\begin{array}{cccccc}
(1,1) & (1,2) & (1,3) & (1,4) & (1,5) & (1,6) \\
(2,1) & (2,2) & (2,3) & (2,4) & (2,5) & (2,6) \\
(3,1) & (3,2) & (3,3) & (3,4) & (3,5) & (3,6) \\
(4,1) & (4,2) & (4,3) & (4,4) & (4,5) & (4,6) \\
(5,1) & (5,2) & (5,3) & (5,4) & (5,5) & (5,6) \\
(6,1) & (6,2) & (6,3) & (6,4) & (6,5) & (6,6)
\end{array}
=
\begin{array}{cccccc}
2 & 3 & 4 & 5 & 6 & 7 \\
3 & 4 & 5 & 6 & 7 & 8 \\
4 & 5 & 6 & 7 & 8 & 9 \\
5 & 6 & 7 & 8 & 9 & 10 \\
6 & 7 & 8 & 9 & 10 & 11 \\
7 & 8 & 9 & 10 & 11 & 12
\end{array}
$$


¿Cuál es la probabilidad de estos eventos?

$$
\begin{aligned}
A &= \lbrace \text{suma} = 7 \rbrace \\
B &= \lbrace 8 < \text{suma} \leq 11 \rbrace \\
C &= \lbrace 10 < \text{suma} \rbrace
\end{aligned}
$$

Asumiendo que $(P(A_{ij}) = 1/36)$ y dado que los eventos $(A_{ij})$, $(i,j = 1, 2, \ldots, N = 6)$, son mutuamente excluyentes, estos deben satisfacer el tercer axioma.

$$
\begin{aligned}
P(A) &= P\left( \bigcup_{i = 1}^{6}A_{i,7-i} \right) = \sum_{i=1}^{6}P(A_{i,7-i}) \\ 
	&= 6\left( \frac{1}{36}\right) = \frac{1}{6}
\end{aligned}
$$

donde 6 es el número de elementos que satisfacen $\bigcup_{i = 1}^{6}A_{i,7-i}$ (observable en la tabla anterior) y 36 es el número de eventos posibles ($n(S)$, la cardinalidad del conjunto universal).


Con $(B)$, hay 9 elementos que satisfacen el requisito $(B = \lbrace 8 < \text{suma} \leq 11 \rbrace)$

$$
\begin{aligned}
P(B) &= P\left\lbrace \left( \bigcup_{i = 3}^{6}A_{i,9-i} \right) \cup \left( \bigcup_{i = 4}^{6}A_{i,10-i} \right) \right. \\ 
& \qquad \left. \cup \left( \bigcup_{i = 5}^{6}A_{i,11-i} \right) \right\rbrace \\
&= 9\left( \frac{1}{36}\right) = \frac{1}{4}
\end{aligned}
$$


En $(C)$ es fácil observar que hay solo 3 resultados elementales coincidentes, por lo que:

$$
\begin{aligned}
P(C) &= 3\left( \frac{1}{36}\right) = \frac{1}{12}
\end{aligned}
$$

Adicionalmente,

$$
\begin{aligned}
P(B \cap C) &= 2\left( \frac{1}{36} \right) = \frac{1}{18} \\
P(B \cup C) &= \frac{10}{36} = \frac{5}{18}
\end{aligned}
$$

considerando que

$$
A = \lbrace \text{suma} = 7 \rbrace \qquad
B = \lbrace 8 < \text{suma} \leq 11 \rbrace \qquad
C = \lbrace 10 < \text{suma} \rbrace
$$
:::

## Consecuencias lógicas de la definición axiomática 
### Definición axiomática según Kolmogorov
 

Las siguientes conclusiones se siguen de los axiomas expuestos:

**1.** Dado que $( A \cup \overline{A} = S )$, usando el segundo axioma:

   
$$
P(A \cup \overline{A}) = P(S) = 1
$$
  

pero $( A \cap \overline{A} = \emptyset )$, y utilizando el tercer axioma:

   
$$
\begin{aligned}
P(A \cup \overline{A}) &= P(A) + P(\overline{A}) = 1 \\
&\Rightarrow \boxed{P(\overline{A}) = 1 - P(A)}
\end{aligned}
$$

**2.** De forma similar, para cualquier $A$, con $A \cap \emptyset = \emptyset$, entonces:
   
$$
P(A \cup \emptyset) = P(A) + P(\emptyset)
$$


pero $A \cup \emptyset = A$, y así debe cumplirse que: $\boxed{P(\emptyset) = 0}$


**3.** Si $A$ y $B$ no son mutuamente exclusivos, ¿cuál es la probabilidad $P(A \cup B)$?  
  Para resolverlo, se debe volver a expresar esa unión en términos de **conjuntos ME** (mutuamente excluyentes), de forma que se pueda utilizar el tercer axioma de la probabilidad.

$$
A \cup B = A \cup \overline{A}B \quad \text{ donde } \quad A \cap \overline{A}B = \emptyset
$$


Utilizando el tercer axioma se tiene que

$$
P(A \cup B) = P(A \cup \overline{A}B) = P(A) + P(\overline{A}B)
$$

pero también

$$
B = S \cap B = (A \cup \overline{A}) \cap B = AB \cup \overline{A}B
$$

Si $AB$ y $\overline{A}B$ son mutuamente excluyentes (ME), se aplica el tercer axioma,

$$
\begin{aligned}
P(B) & = P(AB) + P(\overline{A}B) \\
P(\overline{A} B) & = P(B) - P(A B)
\end{aligned}
$$

y sustituyendo:

$$
\boxed{P(A \cup B) = P(A) + P(B) - P(A \cap B)}
$$

---

![Unión de los conjuntos A y B](/img/0_union_conjuntos.svg)


## Identidades útiles de la probabilidad


$$
P(\overline{A}) = 1 - P(A)
$$

$$
P(\emptyset) = 0
$$

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

::: info Ejemplo del lanzamiento de una moneda

Tirar una moneda "justa" indefinidamente y definir el evento $A$ como

$$
A = \lbrace \text{escudo aparece, $\textit{eventualmente}$} \rbrace
$$

¿Cuál es $P(A)$?

La intuición dice que $A $es un evento con $P(A) = 1$. Sea

$$
\begin{aligned}
A_n &= \lbrace \text{escudo aparece por primera vez} \\ 
& \qquad \text{en el $n$-ésimo tiro} \rbrace \\
&= \lbrace ( \underbrace{C,C,C,\ldots,C}_{n-1},E ) \rbrace
\end{aligned}
$$


Si $A_i \cap A_j = \emptyset$para $1\leq i,j \leq n$(porque cada uno es una secuencia distinta, única):

$$
\begin{matrix}
A_1 && E \\
A_2 && C & E \\
A_3 && C & C & E \\
A_4 && C & C & C & E \\
A_5 && C & C & C & C & E \\
\vdots \\
\end{matrix}
$$

se tiene entonces

$$
A = A_1 \cup A_2 \cup A_3 \cup \cdots \cup A_i \cup \cdots = \bigcup_{n=1}^{\infty} A_i
$$

es decir: "en alguno pega", eventualmente.

:::
