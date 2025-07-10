# Funciones de correlación de los procesos aleatorios

::: info Introducción
Las funciones de correlación y covarianza cuantifican el grado de relación lineal entre un mismo proceso aleatorio en distintos de tiempo (*auto*) y entre dos procesos distintos (*cruzada*).

Sus propiedades tienen interpretaciones importantes en el procesamiento de señales.
:::


## Función de autocorrelación

::: tip Autocorrelación
La autocorrelación de un proceso aleatorio $X(t)$ es la correlación $E[X_1 X_2]$ de dos variables aleatorias $X_1 = X(t_1)$ y $X_2 = X(t_2)$ definidas por el proceso en tiempos $t_1$ y $t_2$. 

$$
    R_{XX}(t_1, t_2) = E[X(t_1)X(t_2)]
$$

Con $t_1 = t$ y $t_2 = t_1 + \tau$ 

$$
    R_{XX}(t, t+\tau) = E[X(t)X(t+\tau)]
$$
:::

Si $X(t)$ es estacionario en sentido amplio, $R_{XX}(t, t+\tau)$ es función únicamente de la diferencia $\tau = t_2 - t_1$, 

$$
R_{XX}(\tau) = E[X(t)X(t+\tau)]
$$

## Propiedades de la función de **autocorrelación**

1. El valor máximo de $R_{XX}(\tau)$ está en $\tau = 0$, por tanto está acotado en el origen.

$$
\vert R_{XX}(\tau) \vert \leq R_{XX}(0)
$$

2. La autocorrelación tiene simetría par.  

$$
R_{XX}(-\tau) = R_{XX}(\tau)
$$

3. El valor máximo es igual a la media del cuadrado (o *valor cuadrático medio*), llamado también la **potencia del proceso**.

$$
R_{XX}(0) = E[X^{2}(t)]
$$

4. Si $X(t)$ es ergódico sin componentes periódicos, y además $E[X(t)] = \overline{X} \neq 0$, entonces

$$
\lim_{\vert \tau \vert \rightarrow \infty} R_{XX}(\tau) = \overline{X}^2
$$

- Si $X(t)$ es ergódico sin componentes periódicos, con media cero, entonces

$$
\lim_{\vert \tau \vert \rightarrow \infty}R_{XX}(\tau) = 0
$$

5. Si $X(t)$ tiene un componente periódico, entonces $R_{XX}(\tau)$ tendrá un componente periódico con el mismo periodo.

::: info Propiedades de autocorrelación
Para un proceso estacionario $\text{WSS}$ y ergódico $\text{ERG}$, sin componentes periódicos, en 

$$
R_{XX}(\tau) = 25 + \frac{4}{1 + 6\tau^2}
$$

encontrar el valor medio y la varianza del proceso.

![Gráfico de autocorrelación mostrando la función y su asíntota en 25](/img/14_proceso_estacionario.svg)

La propiedad 4 establece que $\displaystyle \lim_{\vert \tau \vert \rightarrow \infty} R_{XX}(\tau) = \overline{X}^2$ y entonces

$$
  E[X(t)] = \overline{X} = \sqrt{25} = \pm 5
$$

Nótese que tal propiedad solamente da la magnitud de $\overline{X}$ y no su signo. 

Con la definición de varianza y la propiedad 3 dada por $R_{XX}(0) = E[X^{2}(t)]$ entonces

$$
\begin{aligned}
\sigma_{X}^2 	& = E[X^2(t)] - (E[X(t)])^2 \\
  				& = R_{XX}(0) - \overline{X}^2 \\
  				& = 29 - 25 = 4
\end{aligned}
$$

**Resultados:**  
- Valor medio: $\overline{X} = \pm 5$  
- Varianza: $\sigma_X^2 = 4$

:::


## Función de correlación cruzada

::: tip Correlación cruzada
La función de correlación cruzada está definida por

$$
R_{XY}(t,t+\tau) = E\left[ X(t)Y(t+\tau) \right]
$$
:::

## Propiedades de la función de **correlación cruzada**

1. Si $X(t)$ y $Y(t)$ son conjuntamente estacionarios en sentido amplio, $R_{XY}(t,t+\tau)$ será independiente del tiempo absoluto:

$$
R_{XY}(\tau) = E\left[ X(t)Y(t+\tau) \right]
$$ 

2. Si $R_{XY}(t,t+\tau) = 0$, entonces $X(t)$ y $Y(t)$ son procesos ortogonales. 

3. Si los dos procesos son estadísticamente independientes, la función de correlación cruzada se convierte en: 

    $$
        R_{XY}(t,t+\tau) = E[X(t)]E[Y(t+\tau)]
    $$

4. Si además de ser independientes, $X(t)$ y $Y(t)$ son *al menos* estacionarios en sentido amplio, 

    $$
        R_{XY}(\tau) = \overline{X} \cdot \overline{Y}
    $$

    que es una constante. 

5. Si los procesos son *al menos* estacionarios en sentido amplio, entonces: 

    - $R_{XY}(-\tau) = R_{YX}(\tau)$
    - $\vert R_{XY}(\tau) \vert \leq \sqrt{R_{XX}(0)R_{YY}(0)}$ (media geométrica)
    - $\vert R_{XY}(\tau) \vert \leq \frac{1}{2}\left[ R_{XX}(0) + R_{YY}(0) \right]$ (media aritmética)



## Funciones de covarianza

### Autocovarianza

::: tip Autocovarianza
La función de autocovarianza (momento conjunto central de orden dos) de un proceso estocástico está definida por:

$$
C_{XX}(t, t + \tau) = \mathbb{E}\left[(X(t) - \mathbb{E}[X(t)])(X(t + \tau) - \mathbb{E}[X(t + \tau)])\right]
$$

equivalente a:

$$
C_{XX}(t, t + \tau) = R_{XX}(t, t + \tau) - \mathbb{E}[X(t)]\mathbb{E}[X(t + \tau)]
$$
:::

### Covarianza cruzada

::: tip Covarianza cruzada
La función de covarianza cruzada para dos procesos \( X(t) \) y \( Y(t) \) está definida por:

$$
C_{XY}(t, t + \tau) = \mathbb{E}\left[(X(t) - \mathbb{E}[X(t)])(Y(t + \tau) - \mathbb{E}[Y(t + \tau)])\right]
$$

o, alternativamente:

$$
C_{XY}(t, t + \tau) = R_{XY}(t, t + \tau) - \mathbb{E}[X(t)]\mathbb{E}[Y(t + \tau)]
$$
:::

### Covarianza en procesos WSS
Para procesos que son al menos conjuntamente estacionarios en sentido amplio (WSS), las covarianzas son:

$$
C_{XX}(\tau) = R_{XX}(\tau) - \bar{X}^2
$$

$$
C_{XY}(\tau) = R_{XY}(\tau) - \bar{X} \cdot \bar{Y}
$$

- La varianza de un proceso aleatorio está dada por la autocovarianza con \( \tau = 0 \).
- Para un proceso estacionario en sentido amplio, la varianza no depende del tiempo y está dada por:

$$
\sigma_X^2 = \mathbb{E}\left[(X(t) - \mathbb{E}[X(t)])^2\right] = R_{XX}(0) - \bar{X}^2
$$


::: tip No correlación e independencia
Para dos procesos aleatorios, si:

$$
C_{XY}(t, t + \tau) = 0
$$

entonces están **no correlacionados**, lo cual implica que:

$$
R_{XY}(t, t + \tau) = \mathbb{E}[X(t)] \cdot \mathbb{E}[Y(t + \tau)]
$$

Se concluye que **procesos independientes son no correlacionados**,  
pero el recíproco **no siempre es cierto** (aunque sí lo es para procesos conjuntamente gaussianos).
:::