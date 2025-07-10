# Respuesta de sistemas lineales a una señal aleatoria
## Respuesta del sistema y valor cuadrático medio

En la interacción de señales y sistemas donde hay entradas aleatorias, es posible determinar cantidades útiles para el análisis, como la señal misma o la potencia de salida, conociendo las características determinísticas del sistema y características estadísticas de la entrada.

[ # Respuesta del sistema ]: #

## Respuesta del sistema: convolución

Con $x(t)$ una señal aleatoria, la respuesta de cualquier red eléctrica, denotada por $y(t)$, está dada por la integral de convolución

$$
\begin{aligned}
    y(t) & = \int_{-\infty}^{\infty} x(\xi) h(t - \xi) \, ~\mathrm{d} \xi \\
    & = \int_{-\infty}^{\infty} h(\xi) x(t - \xi) \, ~\mathrm{d} \xi \\
    & = x(t) * h(t)
\end{aligned} 
$$

donde $h(t)$ es la respuesta al impulso de la red. Se está suponiendo un sistema lineal e invariante con el tiempo (LIT).

![Diagrama del sistema lineal e invariante con el tiempo](/img/16_sistema_LIT.svg)

La ecuación anterior es una operación sobre un miembro $x(t)$ del agregado del proceso estocástico $X(t)$ que produce un miembro del agregado de un nuevo proceso $Y(t)$. En general, para todo el proceso estocástico,

$$
\begin{aligned}
    Y(t) & = \int_{-\infty}^{\infty} h(\xi) X(t - \xi) \, ~\mathrm{d} \xi \\
    & = X(t) * H(t)
\end{aligned} 
$$

[ ## Valor medio y cuadrático medio de la respuesta del sistema ]: #

## Valor medio de la respuesta del sistema

Si $X(t)$ es estacionario en sentido amplio (WSS), entonces

$$
\begin{aligned}
    E[Y(t)] & = E\left[ \int_{-\infty}^{\infty} h(\xi) X(t - \xi) \, ~\mathrm{d} \xi \right] = \int_{-\infty}^{\infty} h(\xi) E[X(t - \xi)] \, ~\mathrm{d} \xi \\
    & = \bar{X} \int_{-\infty}^{\infty} h(\xi) \, ~\mathrm{d} \xi = \bar{Y} \quad \text{(constante)}
\end{aligned}
$$


Entonces el valor medio de $Y(t)$ iguala al valor medio de $X(t)$ multiplicado por el área bajo la curva de la respuesta al impulso.

> Nota al margen: Relación entre la integración y el valor esperado
>
> Las operaciones de integración y de esperanza matemática son intercambiables, de modo que, para
> 
>$$
>\int_{t_{1}}^{t_{2}} E[|W(t)|] |h(t)| \, ~\mathrm{d} t < \infty
> $$
>
>donde $t_{1}$, $t_{2}$ son constantes reales que pueden ser infinitas, aplica que
>
>$$
>E\left[ \int_{t_{1}}^{t_{2}} W(t) h(t) \, ~\mathrm{d} t \right] = \int_{t_{1}}^{t_{2}} E[W(t)] h(t) \, ~\mathrm{d} t
>$$

>donde $W(t)$ es alguna función acotada de un proceso aleatorio (sobre el intervalo $[t_{1}, t_{2}]$) y $h(t)$ es una función del tiempo, no aleatoria.

## Valor cuadrático medio de la respuesta del sistema

Para el valor cuadrático medio de $Y(t)$, se calcula

$$ 
\begin{aligned}
    E[Y^2(t)] & = E\left[ \int_{-\infty}^{\infty} h(\xi_{1}) X(t - \xi_{1}) \, ~\mathrm{d} \xi_{1} \int_{-\infty}^{\infty} h(\xi_{2}) X(t - \xi_{2}) \, ~\mathrm{d} \xi_{2} \right] \\
    & = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} E[X(t - \xi_{1}) X(t - \xi_{2})] h(\xi_{1}) h(\xi_{2}) \, ~\mathrm{d} \xi_{1} \, ~\mathrm{d} \xi_{2}
\end{aligned} 
$$

Si se supone que la entrada es estacionaria en sentido amplio:

$$
E[X(t - \xi_{1}) X(t - \xi_{2})] = R_{XX}(\xi_{1} - \xi_{2})
$$

con lo que la ecuación se vuelve independiente de $t$:

$$ 
\begin{aligned}
    \bar{Y^2} & = E[Y^2(t)] \\
    & = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} R_{XX}(\xi_{1} - \xi_{2}) h(\xi_{1}) h(\xi_{2}) \, ~\mathrm{d} \xi_{1} \, ~\mathrm{d} \xi_{2}
\end{aligned} 
$$

---

::: info Sistema con entrada de ruido blanco
Se encontrará $\bar{Y^2}$ para un sistema con ruido blanco gaussiano en su entrada. 

Aquí:

$$
R_{XX}(\xi_{1} - \xi_{2}) = (\mathcal{N}_0 / 2) \delta(\xi_{1} - \xi_{2})
$$

donde $\mathcal{N}_0$ es una constante real positiva. Luego,

$$
\bar{Y^2} = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (\mathcal{N}_0 / 2) \delta(\xi_{1} - \xi_{2}) h(\xi_{1}) ~\mathrm{d} \xi_{1} h(\xi_{2}) ~\mathrm{d} \xi_{2}
$$

Se concluye que:

$$
\bar{Y^2} = (\mathcal{N}_0 / 2) \int_{-\infty}^{\infty} h^2(\xi_{2}) \, ~\mathrm{d} \xi_{2}
$$

La potencia de salida se vuelve proporcional al área bajo el cuadrado de la curva de $h(t)$, en este ejemplo.
:::

## Autocorrelaciones de entrada y salida y correlaciones cruzadas

![Diagrama de relaciones de correlación](/img/16_autocorrelaciones_sistema.svg)  



![Relaciones de correlación con expresiones](/img/16_relaciones_WSS2.svg)  

---

## Autocorrelación de la respuesta

Sea $X(t)$ estacionario en sentido amplio. La autocorrelación de la respuesta  $Y(t)$ es:


$$
\begin{aligned}
R_{YY}(t,t+\tau) =&\ E[Y(t)Y(t+\tau)] \\
=&\ E[\int_{-\infty}^{\infty}h(\xi_1)X(t-\xi_1)d\xi_1\int_{-\infty}^{\infty}h(\xi_2)X(t+\tau-\xi_2)d\xi_2] \\
=&\ \int_{-\infty}^{\infty}\int_{-\infty}^{\infty}E[X(t-\xi_1)X(t+\tau-\xi_2)]h(\xi_1)h(\xi_2)d\xi_1 d\xi_2 
\end{aligned}
$$


Como $X(t)$ es estacionario en sentido amplio:

$$
R_{YY}(\tau) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} R_{XX}(\tau+\xi_1-\xi_2) h(\xi_1) h(\xi_2) \, d\xi_1 d\xi_2
$$ 

pues $X(t)$ se supone que es estacionario en sentido amplio.

Se puede concluir que:

1. $Y(t)$ es estacionario en sentido amplio si $X(t)$ es estacionario en sentido amplio porque $R_{YY}(\tau)$ no depende de $t$ y $E[Y(t)]$ es constante.
2. $R_{YY}(\tau)$ es la doble convolución de la autocorrelación de entrada con la respuesta al impulso del sistema; es decir:

$$ R_{YY}(\tau) = R_{XX}(\tau)\ast h(-\tau)\ast(\tau)
$$


## Correlación cruzada de entrada y salida

La correlación cruzada $X(t)$ e $Y(t)$ es

$$ 
\begin{aligned}
R_{XY}(t, t+\tau) &= E[X(t)Y(t+\tau)] \\
&= E[X(t)\int_{-\infty}^{\infty} h(\xi)X(t+\tau - \xi) d\xi] \\
&= \int_{-\infty}^{\infty} E[X(t)X(t+\tau - \xi)]h(\xi) d\xi
\end{aligned}
$$

Si $X(t)$ es estacionario en sentido amplio,

$$
R_{XY}(\tau) = \int_{-\infty}^{\infty} R_{XX}(\tau - \xi) h(\xi) \, d\xi 
$$

que es la convolución de $R_{XX}(\tau)$ con $h(\tau)$:

$$ R_{XY} = R_{XX}(\tau) \ast h(\tau)
$$


Un desarrollo simliar muestra que:

$$
\begin{aligned}
R_{YX}(\tau) &= \int_{-\infty}^{\infty} R_{XX}(\tau - \xi) h(-\xi) \, d\xi \\
R_{YX} &= R_{XX}(\tau) \ast h(-\tau)
\end{aligned}
$$



Es claro que la correlación cruzada depende de $\tau$ y no del tiempo absoluto $t$. Como consecuencia de este hecho, $X(t)$ y $Y(t)$ son conjuntamente estacionario en sentido amplio si $X(t)$ es estacionario en sentido amplio (esto se concluye puesto que se demostró anteriormente que $Y(t)$ es estacionario en sentido amplio).



## Relaciones entre la autocorrelación y la correlación cruzada
La autocorrelación y la correlación cruzada están relacionados entre sí:

$$
\begin{aligned}
R_{YY}(\tau) &= \int_{-\infty}^{\infty} R_{XY}(\tau + \xi_1) h(\xi_1) \, d\xi_1 \\
             &= R_{XY}(\tau) \ast h(-\tau)
\end{aligned}
$$

Igualmente,

$$
\begin{aligned}
R_{YY}(\tau) &= \int_{-\infty}^{\infty} R_{YX}(\tau - \xi_2) h(\xi_2) \, d\xi_2 \\
             &= R_{YX}(\tau) \ast h(\tau)
\end{aligned}
$$

 
![Relaciones de correlación con expresiones](/img/16_relaciones_WSS2.svg)  

---

# Características espectrales de la respuesta del sistema

- La transformada de Fourier de una función de correlación (autocorrelación o correlación cruzada) es un espectro de potencia para procesos estacionarios en sentido amplio.
- Si $R_{XX}(\tau)$ es conocida para el proceso de entrada, se puede hallar $R_{YY}(\tau)$, $R_{XY}(\tau)$ y $R_{YX}(\tau)$ como se ha descrito anteriormente, para luego obtener espectros de potencia por transformación.
- Desde un punto de vista práctico las integrales involucradas pueden ser difíciles de evaluar.
- El espectro de potencia deseado involucrando la respuesta del sistema se relaciona con el espectro de potencia de entrada.

## Espectro de densidad de potencia de la respuesta

Asumiendo estacionaridad en sentido amplio conjunta, escríbase $\mathcal{S}_{YY}(\omega)$ como la transformada de Fourier de la autorrelación de salida

$$ \mathcal{S}_{YY}(\omega) = \int_{-\infty}^{\infty} R_{YY}(\tau) e^{-j\omega \tau} \, d\tau
$$

Si se sustituye ahora la integral para \( R_{YY}(\tau) \)

$$
\mathcal{S}_{YY}(\omega) = \int_{-\infty}^{\infty}h(\xi_{1})\int_{-\infty}^{\infty}h(\xi_2)\int_{-\infty}^{\infty}R_{XX}(\tau + \xi_{1} - \xi_{2})e^{-j\omega \tau} d_{\tau} d_{\xi_2} d_{\xi_1}
$$

Se hace ahora el cambio de variable $\xi = \tau + \xi_{1} - \xi_{2}$, $d_{\xi} = d_{\tau}$, se tiene:

$$
  \mathcal{S}_{YY}(\omega) = \int_{-\infty}^{\infty}h(\xi_{1})e^{j\omega \xi_{1}} d_{\xi_1} \int_{-\infty}^{\infty}h(\xi_{2})e^{-j\omega \xi_{2}} d_{\xi_2} \int_{-\infty}^{\infty}R_{XX}(\xi)e^{-j\omega \xi} d_{\xi}
$$

Las anteriores tres integrales se reconocen como  $H^{\ast}(\omega)$, $H(\omega)$ y $\mathcal{S}_{XX}(\omega)$, respectivamente. 

$$
\mathcal{S}_{YY}(\omega) = H^{\ast}(\omega)H(\omega)\mathcal{S}_{XX}(\omega) = \mathcal{S}_{XX}(\omega) \vert H(\omega) \vert^2
$$

$\vert H(\omega) \vert^2$ se llama la *función de transferencia de potencia del sistema*. 

![Diagrama espectral](/img/16_espectro.svg)  


---

## Potencia promedio de la respuesta

La potencia promedio, denotada por $P_{YY}$, en la respuesta del sistema se encuentra calculando: 

$$
  P_{YY} = \frac{1}{2\pi}\int_{-\infty}^{\infty}\mathcal{S}_{XX}(\omega)\vert H(\omega) \vert^2  d\omega
$$ 
---

## Espectros de densidad de potencia cruzada de entrada y salida

Puede demostrarse que las transformadas de Fourier de las correlaciones cruzadas pueden escribirse como: 

$$ \begin{aligned}
  \mathcal{S}_{XY}(\omega) & = \mathcal{S}_{XX}(\omega)H(\omega) \\
  \mathcal{S}_{YX}(\omega) & = \mathcal{S}_{XX}(\omega)H(-\omega)
\end{aligned} $$