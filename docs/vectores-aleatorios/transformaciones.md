# Transformaciones de variables aleatorias múltiples

::: warning
Hay varios errores en la trasncripción 3_11_1_transformacion_va_multiples.md
:::

Similar al caso de las variables aleatorias marginales, es posible “transformar” dos o más variables aleatorias conjuntas mediante funciones, y el objetivo es encontrar la función de densidad de las nuevas variables aleatorias conjuntas.

> Considérese el caso de hallar la densidad conjunta para un conjunto de nuevas variables aleatorias $Y_i$:  
> 
> $$
> Y_i = T_i(X_1, X_2, \ldots, X_N) \qquad i = 1, 2, \ldots, N
> $$
> 
> definidas por transformaciones funcionales $T_i$.

**Nota**: $X_i$ puede ser continua, discreta o mixta, mientras las funciones $T_i$ pueden ser lineales o no, continuas, segmentadas, etcétera.

---

- Las nuevas variables aleatorias $Y_i$ son producidas por funciones **univaluadas** continuas $T_i$ con derivadas parciales continuas en todas partes.
- Existe un conjunto de funciones inversas continuas $T_{j}^{-1}$ tal que las variables originales puedan expresarse como funciones continuas univaluadas de las variables nuevas:

$$
X_j = T_{j}^{-1}(Y_1, Y_2, \ldots, Y_N) \qquad j = 1, 2, \ldots, N
$$

Estas suposiciones implican que un punto en el espacio de muestras conjunto de las $X_i$ mapea en un solo punto en el espacio de las nuevas variables $Y_j$.

::: tip Premisa de la relación entre $X_i$ e $Y_i$

- Sea $\mathcal{R}_X$ una región cerrada de puntos en el espacio de las $X_i$, y $\mathcal{R}_Y$ sea la región correspondiente de puntos mapeados en el espacio de las $Y_j$.
- Entonces, **la probabilidad de que un punto caiga en $\mathcal{R}_X$ iguala a la probabilidad de que su punto mapeado caiga en $\mathcal{R}_Y$**.

Estas probabilidades, en términos de densidades conjuntas, son:

$$

\int \cdots \int_{\mathcal{R}_X}
  f_{X_1,\dots,X_N}(x_1,\dots,x_N)\;dx_1\cdots dx_N
=\ 
\int \cdots \int_{\mathcal{R}_Y}
  f_{Y_1,\dots,Y_N}(y_1,\dots,y_N)\;dy_1\cdots dy_N

$$

:::


## Resolver para $f_{Y_1, \ldots, Y_N}(y_1, \ldots, y_N)$

La ecuación anterior puede resolverse tratándola como una integral múltiple donde se hace un cambio de variables.

- Las variables $x_i$ se cambian a nuevas variables $y_i$ mediante la transformación.
- Los límites cambian de la región $\mathcal{R}_X$ a la región $\mathcal{R}_Y$.
- Finalmente, el diferencial de volumen $\mathrm{d}x_1 \cdots \mathrm{d}x_N$ cambiará a $\vert J\vert \, \mathrm{d}y_1 \cdots \mathrm{d}y_N$, donde $\vert J \vert$ es el jacobiano de las transformaciones.

![Imagen](/img/11_matrices.svg)

---

El lado izquierdo de la ecuación se convierte en:

$$

\begin{aligned}
  &\underbrace{\int \cdots \int}_{\text{sobre }\mathcal{R}_X}
  f_{X_1, \ldots, X_N}(x_1, \ldots, x_N)
  \, dx_1 \cdots dx_N
  \\
  &\qquad=
  \underbrace{\int \cdots \int}_{\text{sobre }\mathcal{R}_Y}
  f_{X_1, \ldots, X_N}\big(x_1 = T_{1}^{-1}, \ldots, x_N = T_N^{-1}\big)
  \left| J \right|
  \, dy_1 \cdots dy_N
\end{aligned}

$$


> Dado que este resultado debe igualar el lado derecho, entonces:
>
> $$
> f_{Y_1, \ldots, Y_N}(y_1, \ldots, y_N) = f_{X_1, \ldots,X_N}(x_1 = T_{1}^{-1}, \ldots,x_N = T_{N}^{-1})\vert J\vert
> $$

---

### **Nota sobre el jacobiano**


>El jacobiano es el determinante de una matriz de derivadas parciales, definido por:
>
>$$
J = \left|
\begin{array}{ccc}
  \dfrac{\partial T_{1}^{-1}}{\partial Y_1} & \cdots & \dfrac{\partial T_{1}^{-1}}{\partial Y_N} \\
  \vdots & \ddots & \vdots \\
  \dfrac{\partial T_{N}^{-1}}{\partial Y_1} & \cdots & \dfrac{\partial T_{N}^{-1}}{\partial Y_N}
\end{array}
\right|
=
\mathsf{det} \left(
\begin{array}{ccc}
  \dfrac{\partial T_{1}^{-1}}{\partial Y_1} & \cdots & \dfrac{\partial T_{1}^{-1}}{\partial Y_N} \\
  \vdots & \ddots & \vdots \\
  \dfrac{\partial T_{N}^{-1}}{\partial Y_1} & \cdots & \dfrac{\partial T_{N}^{-1}}{\partial Y_N}
\end{array}
\right)
$$


## Caso especial: dos funciones de dos variables aleatorias

Dada una densidad conjunta $f_{X,Y}(x,y)$ de dos variables aleatorias, y dos funciones

$$
Z = g(X,Y) \quad \text{y} \quad W = h(X,Y)
$$

Queremos encontrar la densidad conjunta $f_{Z,W}(z,w)$.

Igual que antes:

- Si $g(X,Y)$ y $h(X,Y)$ son continuas y diferenciables, es posible desarrollar una forma de obtener el pdf directamente.
- Para derivar el resultado anterior, se asume que $g(X,Y)$ y $h(X,Y)$ son transformaciones uno a uno, de forma que su inversa existe, aquí definidas como

$$
X \triangleq P(Z,W) \quad \text{y} \quad Y \triangleq Q(Z,W)
$$


## Dos funciones de dos variables aleatorias

En el plano $zw$ la región de interés está definida por un rectángulo de lados $\Delta z$ y $\Delta w$.

<p align="center">
  <img src="/img/11_deltaz_deltaw.svg" width="70%">
</p>

- Si $\Delta z$ y $\Delta w$ son suficientemente pequeños, se puede aproximar la siguiente probabilidad $P(\cdot)$:


$$
P\left[ (Z,W) \in \Delta z \Delta w \right] \approx f_{Z,W}(z,w) \cdot \Delta z \Delta w
$$

**Nota**: recordar la interpretación de la probabilidad conjunta como el volumen debajo de la curva bidimensional de $f_{X,Y}(x,y)$. En este caso sería “base por altura”.

---

Esta área se mapea mediante las transformaciones $x = P(z,w)$ y $y = Q(z,w)$ a una nueva área $\Delta$ en el plano $xy$.  
Debido al mapeo entre $(X,Y)$ y $(Z,W)$, lo anterior debe ser igual a:

$$
P\left( (X,Y) \in \Delta \right) \approx f_{X,Y}(x = P(z,w), y = Q(z,w)) \cdot \Delta
$$


- ¿Cómo relacionar entonces las áreas $\Delta z \Delta w$ y $\Delta$?  
  Igualando el área de un rectángulo con el de un paralelogramo, se puede demostrar (https://youtu.be/rnnrUDdKzm0) que:

$$
\Delta = \vert J \vert \, \Delta z \, \Delta w
$$


donde

$$
J(z,w) \triangleq \frac{\partial (P,Q)}{\partial(z,w)} = \det 
\begin{pmatrix}
\frac{\partial P}{\partial z} & \frac{\partial P}{\partial w} \\
\frac{\partial Q}{\partial z} & \frac{\partial Q}{\partial w}
\end{pmatrix}
$$

y se le llama "el jacobiano de la transformación $(P,Q)$".

> Así entonces:
>
> $$
> f_{Z,W}(z,w) = f_{X,Y} \left[ x = P(z,w), y = Q(z,w) \right] \vert J \vert
> $$

Comparar con:

$$
f_{Y_1, \ldots, Y_N}(y_1, \ldots, y_N) = f_{X_1, \ldots,X_N}(x_1 = T_{1}^{-1}, \ldots,x_N = T_{N}^{-1})\vert J\vert
$$

::: warning
Hay varios errores en la trasncripción 3_11_2_vida_util_y_distribucion.md
:::

::: info Vida útil de un componente y su repuesto

Sea $X_1$ una VA para el tiempo de vida de un componente. El componente puede sustituirse una única vez, y $X_2$ representa el tiempo de vida del repuesto. $X_1$ y $X_2$ son **iid** con distribución exponencial de parámetro $\lambda$. Por lo anterior, la PDF conjunta es

$$
f_{X_1,X_2}(x_1,x_2) = \lambda^2 e^{-\lambda(x_1 + x_2)} \quad \text{para} \quad x_1 > 0, x_2 > 0
$$

![Conjunta Vida Util](/img/11_pdf_conjunta_vida_util_repuesto.svg)

Podríamos estar interesados en dos cantidades (transformaciones arbitrarias $u_1$ y $u_2$):

- La vida total del dispositivo $$Y_1 = u_1(X_1,X_2) = X_1 + X_2$$
- La proporción de la vida del primer componente a la vida total del dispositivo $$Y_2 = u_2(X_1,X_2) = \frac{X_1}{X_1 + X_2}$$

## Planteamiento

> ¿Cuál es la distribución conjunta de $Y_1$ y $Y_2$?


Por el teorema de transformación, escrito como

$$
f_{Y_1,Y_2}(y_1,y_2) = f_{X_1,X_2}[x_1 = v_1(y_1,y_2), x_2 = v_2(y_1,y_2)] \left\vert \mathsf{det}(\mathbf{M}) \right\vert
$$

Y dadas las funciones inversas 

- $x_1 = v_1(y_1,y_2) = y_1 y_2$
- $x_2 = v_2(y_1,y_2) = y_1(1 - y_2)$

de donde se obtiene también la región de la "imagen de la transformación", en $y_1 > 0, 0 < y_2 < 1$.

En una transformación bivariada se cumple que

$$
J(y_1,y_2) \triangleq \mathsf{det}(\mathbf{M}) \triangleq \frac{\partial (v_1,v_2)}{\partial(y_1,y_2)} \triangleq \mathsf{det} 
\begin{pmatrix}
\frac{\partial v_1}{\partial y_1} & \frac{\partial v_1}{\partial y_2} \\
\frac{\partial v_2}{\partial y_1} & \frac{\partial v_2}{\partial y_2}
\end{pmatrix}
$$




de donde, dados $v_1(y_1,y_2)$ y $v_2(y_1,y_2)$,

- $\frac{\partial v_1}{\partial y_1} = y_2$
- $\frac{\partial v_1}{\partial y_2} = y_1$
- $\frac{\partial v_2}{\partial y_1} = (1-y_2)$
- $\frac{\partial v_2}{\partial y_2} = -y_1$
  
y, por tanto,

$$
\mathsf{det}(\mathbf{M}) = \frac{\partial v_1}{\partial y_1} \cdot \frac{\partial v_2}{\partial y_2} - \frac{\partial v_1}{\partial y_2} \cdot \frac{\partial v_2}{\partial y_1} = -y_1 y_2 - y_1(1-y_2) = -y_1
$$

Finalmente, la nueva función de densidad viene de

$$
\begin{aligned}
    f_{Y_1,Y_2}(y_1,y_2) 
    & = f_{X_1,X_2}[x_1 = v_1(y_1,y_2), x_2 = v_2(y_1,y_2)] \left\vert \frac{\partial (v_1,v_2)}{\partial(y_1,y_2)} \right\vert \\
    & = \lambda^2 e^{-\lambda(y_1 y_2 + y_1(1 - y_2))} \vert -y_1 \vert = \lambda^2 y_1 e^{-\lambda(y_1)} \\
    & = \lambda^2 y_1 e^{-\lambda y_1} \cdot 1 \quad \text{para} \quad y_1 > 0, 0 < y_2 < 1
\end{aligned}
$$

donde se observa que no depende de $y_2$, y 1 está distribuido en $0 < y_2 < 1$.

![Transformadas](/img/11_pdf_transformada.svg)

Se observa además que

- La distribución del tiempo de vida $X_1 + X_2$ se conoce como *distribución gama*, con parámetros $\alpha = 2$ y $\beta = 2$.
- La proporción del tiempo de vida del componente original es uniforme entre 0 y 1.
- $Y_1$ y $Y_2$ son independientes entre sí.
:::


::: info Ejemplo de transformación lineal

Sea $Z = X + Y$, y $W = X - Y$. Entonces

$$
\begin{aligned}
X &= \frac{Z + W}{2} \triangleq P(Z,W) \\
Y &= \frac{Z - W}{2} \triangleq Q(Z,W)
\end{aligned}
$$

Por tanto

$$
\vert J(z,w) \vert = \left\vert \mathrm{det} 
\begin{pmatrix}
\frac{\partial P}{\partial z} & \frac{\partial P}{\partial w}\\
\frac{\partial Q}{\partial z} & \frac{\partial Q}{\partial w}
\end{pmatrix}
\right\vert
= \left\vert \mathrm{det} 
\begin{pmatrix}
\frac{1}{2} & \frac{1}{2}\\
\frac{1}{2} & -\frac{1}{2}
\end{pmatrix}
\right\vert
= \frac{1}{2}
$$

y así

$$
\boxed{f_{Z,W}(z,w) = \frac{1}{2} f_{X,Y} \left( \frac{z+w}{2}, \frac{z-w}{2} \right)}
$$
:::

::: info Ejemplo de transformación rotacional

Sea, para un ángulo fijo $\theta_0$,

$$
Z = X\cos \theta_0 + Y \sin \theta_0 \qquad
W = X\sin \theta_0 - Y\cos \theta_0
$$


y así


$X = Z\cos \theta_0 + W \sin \theta_0 \triangleq P(Z,W)$ 

$Y = Z\sin \theta_0 - W\cos \theta_0 \triangleq Q(Z,W)$

por tanto

$$
\vert J(z,w) \vert = \left\vert \mathrm{det} 
\begin{pmatrix}
\frac{\partial P}{\partial z} & \frac{\partial P}{\partial w} \\
\frac{\partial Q}{\partial z} & \frac{\partial Q}{\partial w}
\end{pmatrix}
\right\vert
= \left\vert \mathrm{det} 
\begin{pmatrix}
\cos\theta_0 & \sin\theta_0 \\
\sin\theta_0 & -\cos\theta_0
\end{pmatrix}
\right\vert
= 1
$$

de forma que una transformación rotacional como la descrita no cambia la función de densidad conjunta.
:::

::: info Ejemplo de transformación polar

Sea

$$
\begin{aligned}
R^2 &= X^2 + Y^2 & 0 \leq R \leq \infty \\
\Theta &= \tan^{-1}(Y/X) & -\pi < \Theta < \pi
\end{aligned}
$$

$$
X = R\cos\Theta \triangleq P(R,\Theta) \qquad
Y = R\sin\Theta \triangleq Q(R,\Theta)
$$

Luego,

$$
\vert J(r,\theta) \vert = \left\vert \mathrm{det} 
\begin{pmatrix}
\frac{\partial P}{\partial r} & \frac{\partial P}{\partial \theta} \\
\frac{\partial Q}{\partial r} & \frac{\partial Q}{\partial \theta}
\end{pmatrix}
\right\vert
= \left\vert \mathrm{det} 
\begin{pmatrix}
\cos\theta & -r\sin\theta \\
\sin\theta & r\cos\theta
\end{pmatrix}
\right\vert
= r
$$

de forma que

$$
\boxed{f_{R,\Theta}(r,\theta) = f_{X,Y}(r\cos\theta,r\sin\theta) r}
$$
:::

# Distribución probabilística de la suma de variables aleatorias

## Suma de variables aleatorias

Se va a analizar el problema de hallar las funciones de densidad y distribución para una suma de variables aleatorias **estadísticamente independientes**.

## Suma de dos variables aleatorias

Sea $W$ una variable aleatoria igual a la suma de dos variables aleatorias independientes $X$ e $Y$: 

$$
W = X + Y
$$

> **Nota**: $X$ pudiera representar una señal aleatoria de tensión e $Y$ pudiera representar ruido aleatorio. La suma $W$ pudiera representar entonces una tensión de señal más ruido, en algún receptor. 

La función de distribución de probabilidad que se busca está definida por:

$$
F_{W}(w) = P( W \leq w ) = P( X + Y\leq w )
$$

![dx/dy](/img/11_dx_dy.svg)

La probabilidad correspondiente a un área elemental $\mathrm{d}{x}\mathrm{d}{y}$ en el plano $XY$ localizado en el punto $(x,y)$ es  $f_{X,Y} \mathrm{d}{x}\mathrm{d}{y}$. Si se suma todas las probabilidades sobre la región donde $x+y \leq w$ se obtendrá $F_{W}(w)$:

$$
F_{W}(w) = \int_{-\infty}^{\infty}\int_{x = -\infty}^{w-y}f_{X,Y}(x,y)\mathrm{d}{x}\mathrm{d}{y}
$$

Como $X$ y $Y$ son independientes, es decir, $f_{X,Y}(x,y) = f_X(x) f_Y(y)$, entonces,

$$
F_{W}(w) = \int_{-\infty}^{\infty}f_{Y}(y)\int_{x=-\infty}^{w-y}f_{X}(x)\mathrm{d}{x}\mathrm{d}{y}
$$

Después de derivar, usando la regla de Leibniz, se obtiene la función de densidad:

$$
f_{W}(w) = \int_{-\infty}^{\infty}f_{Y}(y)f_{X}(w-y)\mathrm{d}{y}
$$

que describe una **integral de convolución**, por tanto: 



::: tip La función de densidad de la suma...

...de dos variables aleatorias estadísticamente independientes es la convolución de sus funciones de densidad individuales.
:::

::: info Ejemplo de la suma de dos variables aleatorias

**Planteamiento**: Encuentre la función de densidad de $W = X + Y$ donde las densidades respectivas son:

$$
\begin{eqnarray*}
  f_{X}(x) & = & \left(\frac{1}{a}\right) \left[ u(x) - u(x-a) \right] \\
  f_{Y}(y) & = & \left(\frac{1}{b}\right) \left[ u(y) - u(y-b) \right]
\end{eqnarray*}
$$

con $0 < a < b$.

Este ejercicio se puede resolver mediante la integral de convolución o mediante el método de la transformada de Laplace. Se escoge este último método al notarse que ambas funciones de densidad están definidas a partir del origen, lo cual facilita un manejo algebraico del problema.

Se tiene entonces:

$$
\mathcal{L}\{f_X(x)\} = \int_0^a \frac{1}{a} e^{-sx} dx
$$

$$
= \left(\frac{1}{a}\right) \frac{e^{-sx}}{-s} \Bigg|_0^a
$$

$$
= \left(\frac{1}{as}\right) [1 - e^{-as}]
$$

$$
\mathcal{L}\{f_Y(y)\} = \left(\frac{1}{bs}\right) [1 - e^{-bs}]
$$

La transformada de Laplace de una integral de convolución es igual al producto de las transformadas de Laplace de las funciones que conforman el integrando de tal integral. El próximo paso es entonces encontrar el producto de las dos transformadas de Laplace calculadas para luego encontrar la transformada de Laplace inversa y así hallar la nueva función de densidad, correspondiente a la nueva variable aleatoria $W$.

$$
\mathcal{L}\{f_{X}(x)\} \mathcal{L}\{f_{Y}(y)\} = \left( \frac{1}{ab}\right) \left( \frac{1}{s^2}\right) \left[ 1 - e^{-bs} - e^{-as} + e^{-(a+b)s} \right]
$$

Lo que sigue ahora es encontrar la transformada de Laplace inversa, para lo que es importante recordar la siguiente transformada:

$$
\mathcal{L}\{ t^n \} = \frac{n!}{s^n+1} 
$$

Se obtiene entonces:

$$
\begin{aligned}
f_W(w) &= \mathcal{L}^{-1} \{ \frac{1}{a b s^2} [ 1 - e^{-a s} - e^{-b s} + e^{-(a+b)s} ] \} \\ 
&= \frac{1}{ab} w\, \mathrm{u}(w) - \frac{1}{ab} (w - a) \mathrm{u}(w - a) - \frac{1}{ab} (w - b) \mathrm{u}(w - b) \\
&\quad + \frac{1}{ab} (w - a - b) \mathrm{u}(w - a - b)
\end{aligned}
$$

Nótese que se ha hecho cambios de variable para emplear correctamente la transformada de Laplace. Finalmente, dado que el resultado debe ser una función de densidad, una prueba que se puede hacer para probar si el resultado es correcto, es comprobar que el área bajo la curva de la nueva función es en efecto igual a la unidad.
:::

# Suma de varias variables aleatorias
 
::: tip La función de densidad de la suma de varias variables aleatorias

La función de densidad de $Y = X_1 + X_2 + \cdots + X_N$, donde las \$X_i\$ son variables aleatorias estadísticamente independientes entre sí, es la convolución de las \$N\$ funciones de densidad individuales: 

$$
f_{Y}(y) = f_{X_N}(x_N) \ast f_{X_{N-1}}(x_{N-1}) \ast \cdots \ast f_{X_1}(x_1)
$$
:::