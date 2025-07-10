# Vector de estado estable en tiempo continuo

::: danger
Faltan 2 transcripciones:
- 5_19_1_vector_estable.nd
:::


## Cola de un solo servidor 

::: info La cola de un solo servidor
Encuentre el vector de probabilidad $\phi$ de estado estable para la cola de un servidor.

Usando los valores de $\Omega_i$, $p_i$, $q_i$ de este ejemplo:
- $\Omega_{i-1}p_{i-1} = \lambda$
- $\Omega_i q_i = \nu$

Para todo $i \geq 1$:

$$
\phi_i = \frac{\Omega_{i-1}p_{i-1}}{\Omega_i q_i} \phi_{i-1} = \frac{\lambda}{\nu} \phi_{i-1}
$$

Por lo tanto:

$$
\phi_i = \frac{\lambda}{\nu} \phi_{i-1} = \left( \frac{\lambda}{\nu} \right)^2 \phi_{i-2} = \cdots = \left( \frac{\lambda}{\nu} \right)^i \phi_0
$$




Para $i = 0, 1, 2, \ldots$, la normalización implica que:

$$
\sum_{i=0}^{\infty} \phi_i = \phi_0 \sum_{i=0}^{\infty} \left( \frac{\lambda}{\nu} \right)^i = 1
$$

Utilizando la fórmula de la serie geométrica:

$$
\phi_0\sum_{i=0}^{\infty} \left( \frac{\lambda}{\nu} \right)^i = \phi_0\frac{1}{1 - \frac{\lambda}{\nu}}
$$

para $\frac{\lambda}{\nu} < 1$.



Si $\frac{\lambda}{\nu} \geq 1.$, la condición de normalización no se satisface. 
:::

> Para que exista un estado estable, la tasa de partidas $\nu$ debe ser mayor que la de llegadas $\lambda$.De otra orma, al cola tiende a hacerse más grande y no alcanza una estabilidad  

---
::: info La cola de un solo servidor con $\lambda < \nu$
Para la cola de un servidor con $\lambda < \nu$, encuentre la longitud esperada de la cola en estado estable.



En el estado estable, la longitud $L$ de la cola es $i$ con probabilidad $\phi_i$, para $i = 0, 1, 2, \ldots$  
Nótese que la variable aleatoria $X = L + 1$ está geométricamente distribuida.

Para $j \geq 1$:

$$
P(X = j) = P(L = j - 1) = \phi_{j-1} = (1 - q) q^{j - 1}
$$

Donde:

$$
q = \frac{\lambda}{\nu}
$$


De esta forma, la esperanza de $X$ es:

$$
E[X] = \sum_{j=0}^{\infty} j (1 - q) q^{j - 1}
     = \sum_{j=0}^{\infty} j q^{j - 1}
     = \sum_{j=0}^{\infty} j q^j
$$

Utilizando que:

$$
\sum_{j=0}^{\infty} j q^j = \frac{q}{(1 - q)^2}
\quad \Rightarrow \quad
E[X] = \frac{1}{1 - q} = \frac{\nu}{\nu - \lambda}
$$

Entonces:

$$
E[L] = E[X - 1] = \frac{\lambda}{\nu - \lambda}
$$

> La longitud esperada de la cola de un servidor para $\lambda < \nu$ es:  
$\boxed{\dfrac{\lambda}{\nu - \lambda}}$


Se utiliza el resultado:

$$
\sum_{j=0}^{\infty} j x^{j - 1} = \frac{1}{(1 - x)^2}
$$

para $-1 < x < 1$.

También se usa la ecuación:

$$
\sum_{j=0}^{\infty} jx^j = \frac{x}{(1 - x)^2}
$$

para $-1 < x < 1$.

:::

## Cola de un infinito número de servidores

::: info La cola de un infinito número de servidores

Encuentre el vector $\phi$ de probabilidad de estado estable para la cola con infinito número de servidores.

Si se usan los valores de $\Omega_i$, $p_i$, $q_i$ de tal ejemplo:

$$
\Omega_{i-1}p_{i-1} = \frac{((i-1)\nu + \lambda)\lambda}{(i-1)\nu + \lambda} = \lambda
$$

$$
\Omega_i q_i = \frac{(i\nu + \lambda)i\nu}{i\nu + \lambda} = i\nu
$$

Por consiguiente:

$$
\phi_i = \frac{\Omega_{i-1}p_{i-1}}{\Omega_i q_i} \phi_{i-1} = \frac{\lambda}{i\nu} \phi_{i-1}
$$



Si $i = 1, 2, \ldots$, esta relación puede usarse recursivamente:

$$
\begin{aligned}
\phi_i &= \frac{\lambda}{i\nu} \phi_{i-1} \\
       &= \frac{\lambda}{i\nu} \cdot \frac{\lambda}{(i-1)\nu} \phi_{i-2} \\
       &\quad \vdots \\
       &= \frac{1}{i!} \left( \frac{\lambda}{\nu} \right)^i \phi_0
\end{aligned}
$$



Si se usa normalización:

$$
1 = \sum_{i=0}^{\infty} \phi_i = \phi_0 \sum_{i=0}^{\infty} \frac{(\lambda/\nu)^i}{i!} = \phi_0 e^{\lambda/\nu}
$$

Por lo tanto, $\phi_0 = e^{-\lambda/\nu}$. En conclusión, para la cola con infinito número de servidores, las probabilidades de estado estable son:

$$
\phi_i = \frac{(\lambda/\nu)^i}{i!} e^{-\lambda/\nu}, \quad i = 0, 1, 2, \ldots
$$


> Las probabilidades en estado estable para la cola con infinito número de servidores están distribuidas de acuerdo a Poisson con parámetro $\frac{\lambda}{\nu}$. Consecuentemente, la longitud esperada de la cola con infinito de servidores es $\frac{\lambda}{\nu}$. El estado estable siempre esxiste: esto tiene sentido porque hay un infinito número de servidores.

:::

## 90 % del tiempo con $N$ o menos clientes

::: info 90 % del tiempo con $N$ o menos clientes

Para la cola con infinito número de servidores con tasa de arribo $\lambda$ y tiempo medio de servicio $1/\nu$,  
encuentre el número $N$ más pequeño de modo que **el 90 % del tiempo** habrá $N$ o menos clientes en el estado estable.


En el estado estable, la probabilidad de $i$ clientes es:

$$
\phi_i = \frac{(\lambda/\nu)^i}{i!} e^{-\lambda/\nu}
$$



Si bien $\sum_{i=0}^{\infty} \phi_i = 1$, $N$ es el entero más pequeño que satisface:

$$
\phi_0 + \phi_1 + \cdots + \phi_N \geq 0.90
$$

$$
\sum_{i=0}^{N} \phi_i = \sum_{i=0}^{N} \frac{(\lambda/\nu)^i}{i!} e^{-\lambda/\nu} \geq 0.90
$$


Nótese que el valor de $N$ depende solamente de la razón $\lambda/\nu$.Se muestra el Cuadro 1 con valores de $\lambda/\nu$ contra $N$. El resultado es interesante: el número esperado de clientes para la cola con infinito número de servidores $\lambda/\nu$, pero solamente un poco más que este número de clientes estará presente 10% del tiempo.

| $\lambda/\nu$ | $N$ | $\lambda/\nu$ | $N$ |
|--------------:|----:|--------------:|----:|
| 0.5           | 1   | 20            | 26  |
| 2             | 2   | 50            | 59  |
| 5             | 8   | 100           | 113 |
| 10            | 14  |               |     |

*Cuadro: Número $N$ más pequeño para que el 90 % del tiempo haya $N$ o menos clientes en el estado estable.*

:::


## El sistema de colas M/M/s

> Un sistema M/M/s tiene un proceso de llegada y de servicio tipo Markov (de ahí la M) y un número $s$ de servidores.

En un sistema M/M/s, las llegadas son descritas por un proceso de Poisson con parámetro $\lambda$. Cada uno de los $s$ servidores tiene un tiempo de servicio exponencial con parámetro $\nu$.  
El proceso $X(t) = i$ (notación abreviada $X_t$) describe el estado del sistema al tiempo $t$ para $S = \{0, 1, \dots \}$ (es decir, $i \geq 0$).

Únicamente con $\rho = \lambda/(s \nu) < 1$ el sistema alcanza un estado estacionario, donde:

$$
\Omega_0 = \lambda \hspace{1.5cm} \Omega_{i \rightarrow i-1} = 
\begin{cases} 
i \nu & \text{para } 0 < i < s \\
s \nu & \text{para } i \geq s
\end{cases}
$$

$$
\phi_0 = \left[ \sum_{k=0}^{s-1} \frac{(s \rho)^k}{k!} + \frac{(s \rho)^s}{s!(1-\rho)} \right]^{-1}
$$

$$
\phi_i =
\begin{cases}
\displaystyle \frac{(s \rho)^i}{i!} \phi_0 & \text{para } i < s \\
\displaystyle \frac{s^s \rho^i}{s!} \phi_0 & \text{para } i \geq s
\end{cases}
$$

## Notación alternativa M/M/c

En algunas referencias es posible encontrar esta notación equivalente:

$$
\pi_0 = \left[\left(\sum_{k=0}^{c-1} \frac{(c\rho)^k}{k!} \right) + \frac{(c\rho)^c}{c!(1 - \rho)}\right]^{-1}
$$

$$
\pi_k =
\begin{cases}
\pi_0 \dfrac{(c\rho)^k}{k!} & \text{para } 0 < k < c \\
\pi_0 \dfrac{(c\rho)^k c^{c-k}}{c!} & \text{para } k \geq c
\end{cases}
$$

donde $c$ es el número de servidores, $k$ es el estado (o número de clientes en el sistema), $\pi_k$ es la probabilidad en estado estable y $\rho = \lambda/(c \nu)$.

Asimismo, es posible describir el número promedio de clientes en el sistema como:

$$
L = \frac{\lambda}{\nu} + \frac{\rho (s \rho)^s}{s!(1 - \rho)^2} \phi_0
$$

Y el número promedio de clientes en una fila (cuando todos los servidores están ocupados), dado como:

$$
L_q = \frac{\rho (s \rho)^s}{s!(1 - \rho)^2} \phi_0 = L - \frac{\lambda}{\nu}
$$

## Parámetros del sistema

Para una corriente de arribo de Poisson con parámetro $\lambda$ y un tiempo de servicio exponencial con parámetro $\nu$, con un solo servidor $s = 1$, las probabilidades de estado estable son:

$$
\Omega_0 = \lambda \hspace{1.5cm} \Omega_{i \rightarrow i-1} = \nu
$$

$$
\phi_0 = 1 - \frac{\lambda}{\nu} = 1 - \rho
$$

$$
\phi_i = \left( 1 - \frac{\lambda}{\nu} \right) \left( \frac{\lambda}{\nu} \right)^i = (1 - \rho) \rho^i
$$

El número promedio de clientes en el sistema es:

$$
L = \frac{\rho}{1 - \rho} = \frac{\lambda}{\nu - \lambda}
$$

Y el número promedio de clientes en una fila (cuando el servidor está ocupado) es:

$$
L_q = \frac{\lambda^2}{\nu(\nu - \lambda)} = \frac{\rho^2}{1 - \rho}
$$


::: info Servidor web

Un servidor web es modelado como un sistema M/M/1 con una tasa de arribo de 2 solicitudes por minuto.  
Se desea tener 3 solicitudes o menos en fila (más una que está siendo atendida) el 99% del tiempo.  
¿Qué tan rápido debe ser el servicio? $\nu$ es solicitudes atendidas por minuto.

El estado $i$ es el número de clientes en el sistema. La longitud de la fila es $L_q = i - 1$ (en virtud de la solicitud que está siendo atendida en $s = 1$ servidores). Es posible encontrar:

$$
P(\text{5 o más clientes en el sistema}) = \sum_{i=5}^{\infty} (1 - \rho) \rho^i = 1 - \sum_{i=0}^{4} (1 - \rho) \rho^i = \rho^5
$$

que depende de $\rho = \frac{\lambda}{\nu}$ y del parámetro de servicio $\nu$ buscado.

De los datos del problema: $\lambda = 2$. Para tener una fila de 3 o menos clientes el 99% del tiempo se necesita:

$$
P(5 \text{ o más clientes en el sistema}) = \rho^5 = \left( \frac{\lambda}{\nu} \right)^5 \leq 0.01
$$

> Cantidad de solicitudes por minuto para garantizar hasta 3 personas en la fila
>
>$$
>\nu^5 \geq \frac{\lambda^5}{0.01} = \frac{2^5}{0.01} = 3200 \quad \Rightarrow \nu \geq 5.024
>$$
:::

## Teorema del límite

Suponga las siguientes condiciones para el proceso de nacimiento y muerte:

1.  $p_0 = 1$  
2.  $0 < p_i < 1$ para $i = 1, 2, \dots$  
3.  $q_N = 1$ si $S = \{0, 1, 2, \dots, N\}$  
4.  $\Omega_i > 0$ para $i \in S$

Suponga que $\phi$ es un vector de probabilidad que satisface:

$$
\phi_i = \left( \frac{\Omega_{i-1} p_{i-1}}{\Omega_i q_i} \right) \phi_{i-1}
$$

para i = 1,2,...

Entonces:

1.  Dado cualquier vector de probabilidad inicial $\rho$,

$$
P(X_t = i \mid \text{vector inicial } \rho) \to \phi_i
$$

cuando $t \rightarrow \infty$ para cada $i \in S$.

2.  Si el vector de probabilidad inicial es $\rho$ = $\phi$, entonces

$$
P(X_t = i \mid \text{vector inicial } \phi) = \phi_i 
$$

para todo $t \geq 0$ para $i \in S$.

**Primer resultado**
Sin importar el estado inicial en el tiempo $t = 0$, el proceso se hallará en el estado $i$ con probabilidad $\phi_i$ conforme $t$ se hace grande.

**Segundo resultado**
Si $\phi$ se usa como el vector inicial de probabilidad, entonces $\phi$ será el vector de probabilidad para todo tiempo $t \geq 0$.

Las condiciones del teorema sobre $\Omega_i, p_i, q_i$ son esenciales: ningún estado es absorbente y cualquier estado puede alcanzarse desde cualquier otro estado.

### Videos y referencias en internet

- ¿Qué es una cadena de Markov?

  Luis Rincón  [https://youtu.be/Trf9P7DnOHQ](https://youtu.be/Trf9P7DnOHQ)

- Origin of Markov chains | Journey into information theory | Computer Science

  Khan Academy Labs  [https://youtu.be/Ws63I3F7Moc](https://youtu.be/Ws63I3F7Moc)
