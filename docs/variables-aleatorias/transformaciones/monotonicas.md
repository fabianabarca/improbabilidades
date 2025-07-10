# Transformaciones monotónicas
## Transformaciones monotónicas de una VA continua

![Transformación monotónica de una variable continua](/img/8_transf_monotonica.svg)

::: tip Definición

Una transformación o función $T$ es *monotónicamente creciente* en un intervalo si

$$ T(x_1) < T(x_2) \quad \text{para cualquier} \quad x_1 < x_2 $$
:::

**Transformaciones crecientes**

Supóngase que $T$ es continua y diferenciable en todo valor de $x$ para el que $f_X(x) \neq 0$ (es decir, donde $X$ tiene *soporte*). Para un valor $x_0$ cualquiera en el intervalo se cumple que

$$
y_0 = T(x_0) \quad \text{y} \quad x_0 = T^{-1}(y_0)
$$

donde $T^{-1}$ representa el inverso de la transformación $T$.

## **Premisa (el método CDF)**

> La probabilidad del evento $\{Y \leq y_0\}$ debe igualar la probabilidad del evento $\{X \leq x_0\}$ debido a la correspondencia entre \(X\) e \(Y\).


Así entonces, debe cumplirse que

$$
F_{Y}(y_0) = P\{Y \leq y_{0}\} = P\{X \leq x_0 \} = F_{X}(x_0)
$$

y mediante la definición de la CDF a partir de la PDF

$$
\int_{-\infty}^{y_0} f_{Y}(y) \mathrm{d} y = \int_{-\infty}^{x_0 = T^{-1}(y_0)} f_{X}(x) \mathrm{d} x
$$

Por lo que resta despejar para $f_Y(y)$, que es la función de interés.

## Regla de Leibniz

Si $H(x,u)$ es continua en las variables $x$ y $u$, y además  

$$
  G(u) = \int_{\alpha(u)}^{\beta(u)} H(x,u) \mathrm{d} x
$$

entonces la derivada de la integral respecto al parámetro $u$ es:

$$
  \frac{\mathrm{d} G(u)}{\mathrm{d} u} = H\left[ \beta(u), u \right] \frac{\mathrm{d} \beta(u)}{\mathrm{d} u}  
  - H\left[\alpha(u), u\right] \frac{\mathrm{d} \alpha(u)}{\mathrm{d} u}  
  + \int_{\alpha(u)}^{\beta(u)} \frac{\partial H(x,u)}{\partial u} \mathrm{d} x
$$

En nuestro escenario, y considerando que el límite inferior de $f_X(x)$ es $T^{-1}(y_a)$ y que es una constante (posiblemente $-\infty$), aplica que  

$$
\begin{multline}
  f_Y(y_0) = f_X\left[ T^{-1}(y_0), y_0 \right] \frac{\mathrm{d} T^{-1}(y_0)}{\mathrm{d} y_0} \\  
  - f_X\left[T^{-1}(y_a), y_0\right] \left(\frac{\mathrm{d} T^{-1}(y_a)}{\mathrm{d} y} = 0\right)   
  + \int_{T^{-1}(y_a)}^{T^{-1}(y_0)} \left(\frac{\partial f_X(x)}{\partial y} = 0\right) \mathrm{d} x
\end{multline}
$$

## Transformación monotónica creciente

Con base en la regla de Leibniz, evaluada anteriormente, se obtiene  

$$
  f_{Y}(y_0) = f_{X}\left[ T^{-1}(y_0) \right] \frac{\mathrm{d} T^{-1}(y_0)}{\mathrm{d} y_0}
$$

pero como la ecuación anterior aplica para cualquier $y_0$, se puede eliminar el subíndice y reescribir  

$$
\boxed{
f_{Y}(y) = f_{X}\left[ T^{-1}(y) \right] \frac{\mathrm{d} T^{-1}(y)}{\mathrm{d} y}
}
$$

que es la función de densidad buscada de $Y$, en términos de la transformación (inversa) aplicada a $X$, para $T$ monotónicamente **creciente**.

## Transformación monotónica decreciente

![Transformación monotónica decreciente](/img/8_transf_monotonica_deccreciente.svg)


::: tip Definición

Una transformación o función $T$ es *monotónicamente decreciente* en un intervalo si  

$$ T(x_1) > T(x_2) \quad \text{para cualquier} \quad x_1 < x_2 $$
:::

Si se considera el caso de la transformación decreciente, se escribe:

$$
F_{Y}(y_0) = P\{ Y \leq y_0\} = P\{ X \geq x_0\} = 1 - F_{X}(x_0)
$$

Siguiendo el mismo razonamiento usado para obtener la ecuación de Leibniz, se obtendrá  

$$
\boxed{
f_{Y}(y) = -f_{X}\left[ T^{-1}(y) \right] \frac{\mathrm{d} T^{-1}(y)}{\mathrm{d} y}
}
$$

## Teorema de transformación monotónica

Dado que la pendiente de $T^{-1}(y)$ es negativa pues la función es decreciente, se concluye que para cualquier tipo de transformación monotónica:

::: tip "Teorema de transformación monotónica"

$$
f_{Y}(y) = f_{X}\left[ T^{-1}(y) \right] \left| \frac{\mathrm{d} T^{-1}(y)}{\mathrm{d} y} \right|  
$$
:::

> **Recordatorio:** Es importante notar que la ``monotonicidad'' se evalúa en la función $g(X)$ (la transformación $T(X)$) y no tiene que ver con la función de densidad $f_X(x)$ (error de análisis común).


**Notación alternativa del teorema de transformación**
En ocasiones se utiliza la notación $Y = g(X)$ para la transformación, y $X = h(Y)$ como la transformación inversa. El teorema se enuncia entonces como

$$
f_Y(y) = f_X\left[ h(y) \right] \left\vert \frac{\mathrm{d} h(y)}{\mathrm{d} y} \right\vert
$$


---

::: info Ejemplo de Disipación de potencia en un resistor

Sea $I$ una variable aleatoria que denota la corriente en un resistor $R$ de valor \(1~\Omega\).  
$I$ tiene una distribución uniforme en el intervalo de 1 a 3 A, es decir:

$$
f_I(i) =
\begin{cases} 
\frac{1}{2} & 1 < i < 3 \\
0 & \text{en otra parte}
\end{cases}
$$

¿Cuál es el promedio de la corriente $I$?  
¿Cuál es el promedio de la potencia disipada en $R$, con $P = g(I) = I^2 R$?

---
Primero se hará el cálculo mediante E[g(I)] (como se hizo en una presentación anterior) y luego a través de la nueva función de densidad fP (p).

$$
\begin{aligned}
E[I] & = \int_{-\infty}^{\infty} i \cdot f_{I}(i) \, \mathrm{d}i \\ 
    & = \int_{1}^{3} i \cdot \frac{1}{2} \, \mathrm{d}i \\
    & = 2\,\text{A}
\end{aligned}
$$

![Promedio de corriente](.//img/8_prom_corriente.svg)

---


$$
\begin{aligned}
E[P] & = \int_{1}^{3} i^2 \cdot \frac{1}{2} \, \mathrm{d}i \\
    & = \frac{13}{3} \approx \boxed{4.33\,\text{W}}
\end{aligned}
$$

![Promedio de potencia](.//img/8_prom_potencia.svg)

---
Es posible obtener $E[P]$ desde $f_P(p)$ por medio de la transformación $g(I) = P = I^2 R$, con

$$
h(P) = I = \sqrt{\frac{P}{R}},
$$

y con los límites \(1 < i < 3\) y \(1 < p < 9\). Aplicando el teorema:

$$
f_P(p) = f_I \bigl[ h(p) \bigr] \cdot \left| h'(p) \right| = f_I \left[ \sqrt{\frac{p}{R}} \right] \cdot \left| \frac{(p/R)^{-1/2}}{2} \right|
$$



$$
\begin{aligned}
f_P(p) & = f_I\left( \sqrt{p} \right) \cdot \left| \frac{\mathrm{d}}{\mathrm{d}p} \sqrt{p} \right|^{-1} \\
    & = \frac{1}{2} \cdot \left| \frac{1}{2 \sqrt{p}} \right| = \boxed{\frac{1}{4 \sqrt{p}} \quad \text{para } 1 < p < 9}
\end{aligned}
$$

---
Y su promedio es:

$$
\begin{aligned}
E[P] & = \int_{1}^{9} p \cdot \frac{1}{4 \sqrt{p}} \, \mathrm{d}p = \frac{1}{4} \int_{1}^{9} \sqrt{p} \, \mathrm{d}p \\
    & = \frac{1}{4} \cdot \left. \frac{2}{3} p^{3/2} \right|_1^9 
    = \frac{13}{3} \approx \boxed{4.33\,\text{W}}
\end{aligned}
$$

![Disipación lineal](.//img/8_disipacion_constante.png)



<p style="text-align: right; font-size: 22px; color: #0099cc;">
  Simulación de la potencia en un resistor
</p>


<span style="color:green; font-weight:bold;">import</span> <span style="color:blue; font-weight:bold;">numpy</span> <span style="color:green; font-weight:bold;">as</span> <span style="color:blue; font-weight:bold;">np</span>

<span style="color:green; font-weight:bold;">from</span> <span style="color:blue; font-weight:bold;">scipy</span> <span style="color:green; font-weight:bold;">import</span> stats

<span style="color:gray; font-style:italic;"># Inicialización de vectores</span>

N = 500

Irvs = [0]*N

P = [0]*N

<span style="color:gray; font-style:italic;"># Distribución de la corriente</span>

I = stats.uniform(1, 2)

<span style="color:gray; font-style:italic;"># Simulación</span>

<span style="color:green; font-weight:bold;">for</span> i <span style="color:violet; font-weight:bold;">in</span> <span style="color:green; font-weight:bold;">range </span> (N):

  Irvs[i] = I.rvs()

  P[i] = Irvs[i]**2



![Descripción alternativa](.//img/8_sim_corriente.svg)

![Descripción alternativa](.//img/8_sim_potencia.svg)

:::
---

::: info **Ejemplo de distribución uniforme y transformaciones de una variable aleatoria**

Sea $X \sim \mathsf{unif}(0,1)$ (es decir, $f_X(x) = 1$ en \(0 \leq x \leq 1\)).  
Se define una nueva variable $Y = 2\sqrt{X}$. Encuentre $f_Y(y)$.

La función $g(X) = 2\sqrt{X}$ es monótona en \([0, 1]\) y tiene una inversa $h(y) = \frac{y^2}{4}$.

Se aplica el teorema:

$$
\begin{aligned}
f_Y(y) & = f_X(h(y)) \left| h'(y) \right| = (1) \left| \frac{d}{dy} \frac{y^2}{4} \right| \\
        & = \frac{2y}{4} \\
\boxed{
f_Y(y) = \frac{y}{2} \quad \text{en} \quad y \in [0, 2]
}
\end{aligned}
$$
:::

::: info **Otro ejemplo de la disipación de potencia en un resistor**

La variación en cierta fuente de corriente eléctrica $X$ (en miliamperios) puede ser modelada por el PDF

$$
f_X(x) =
\begin{cases}
1.25 - 0.25 x & 2 \leq x \leq 4 \\
0 & \text{en otros casos}
\end{cases}
$$

Si esta corriente pasa por un resistor de \(220\, \Omega\), la potencia disipada es dada por la expresión $Y = 220 X^2$.  
¿Cuál es la función de densidad de $Y$?

La función $y = g(x) = 220 x^2$ es monótonamente creciente en el rango de $X$, \([2,4]\), y tiene función inversa  
$x = h(y) = g^{-1}(y) = \sqrt{\frac{y}{220}}$.

Aplicando el teorema de transformación, entonces,

$$
\begin{aligned}
f_Y(y) & = f_X(h(y)) \left| h'(y) \right| \\
        & = f_X \left( \sqrt{\frac{y}{220}} \right) \left| \frac{d}{dy} \sqrt{\frac{y}{220}} \right| \\
        & = \left(1.25 - 0.25 \sqrt{\frac{y}{220}} \right) \frac{1}{2\sqrt{220 y}} \\
        & = \frac{1}{2\sqrt{220 y}} - \frac{1}{1760}
\end{aligned}
$$

Y por tanto,

$$
\boxed{
f_Y(y) = 
\begin{cases}
\frac{1}{2\sqrt{220 y}} - \frac{1}{1760} & 880 \leq y \leq 3520 \\
0 & \text{en otra parte}
\end{cases}
}
$$

![Disipación lineal](.//img/8_disipacion_lineal.png)
:::


::: info **Ejemplo Transformación de variable aleatoria $T$**
Hay una variable aleatoria $T$ distribuida uniformemente en el intervalo \([1,7]\). Sobre ella se aplica una transformación

$$
U = T^{2} - T - 6
$$

1. Encontrar $f_{U}(u)$, la función de densidad probabilística de la variable aleatoria $U$.  
2. Calcular $P\{-4 < U \leq 14\}$.

**Parte 1**: Encontrar $f_{U}(u)$, la función de densidad probabilística de la variable aleatoria $U$.

La variable aleatoria $T$ dada es

$$
f_T(t) =
\begin{cases}
\frac{1}{6} & 1 \leq t \leq 7 \\
0	& \text{en otra parte}
\end{cases}
$$

La transformación $U = g(T)$ es monótonamente creciente en el intervalo \([1,7]\), por tanto es posible utilizar la fórmula

$$
f_U(u) = f_T(h(u)) \left| \frac{d}{du} h(u) \right|
$$

donde $h(u)$ es la función inversa.

Se obtiene $h(u)$ de la forma

$$
\begin{aligned}
u &= t^2 - t - 6 \\
0 &= t^2 - t - (u + 6) \\
t &= \frac{1 \pm \sqrt{1 - 4(-u - 6)}}{2} \quad \text{(fórmula general)} \\
    &= \frac{1 \pm \sqrt{4u + 25}}{2}
\end{aligned}
$$

Se elige la solución positiva, y queda

$$
h(u) = \frac{1 + \sqrt{4u + 25}}{2}
$$

Ahora, para derivar la función inversa, se utiliza regla de la cadena   

$$
\begin{aligned}
\frac{d}{du} h(u) &= \frac{d}{du} \left[ \frac{1 + \sqrt{4u + 25}}{2} \right] \\
&= \frac{1}{2} \cdot \frac{4}{2\sqrt{4u + 25}} = \frac{1}{\sqrt{4u + 25}}
\end{aligned}
$$

Y entonces, se evalúa

$$
f_U(u) = f_T(h(u)) \left| \frac{d}{du} h(u) \right| = \frac{1}{6} \cdot \frac{1}{\sqrt{4u + 25}}
$$

Evaluando también los límites de $T$ en la transformación $g(T)$, la función de densidad buscada es

$$
\boxed{
f_U(u) =
\begin{cases}
\frac{1}{6 \sqrt{4u + 25}} & -6 \leq u \leq 36 \\
0	& \text{en otra parte}
\end{cases}
}
$$


**Parte 2**: Calcular $P\{-4 < U \leq 14\}$

La probabilidad $P\{-4 < U \leq 14\}$ requiere la integración de $f_U(u)$ en ese intervalo. Esta
integral puede ser más o menos difícil de evaluar, pero es posible calcularla
numéricamente con las calculadoras científicas comunes, resultando

$$
P\{-4 < U \leq 14\} = \int_{-4}^{14} \frac{1}{6 \sqrt{4u + 25}} \, du = \boxed{0.5}
$$

En todo caso, la integral (a partir de una tabla de integrales) es

$$
\int \frac{1}{6 \sqrt{4u + 25}} \, du = \frac{1}{12} \sqrt{4u + 25}
$$

y la evaluación en \([-4, 14]\) da en efecto igual a 0.5.
:::