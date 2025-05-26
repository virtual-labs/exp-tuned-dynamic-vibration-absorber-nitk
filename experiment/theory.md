 A vibration absorber is a mechanical device which is tuned to reduce or eliminate undesired vibrations, it must shift the natural frequencies, away from the excitation frequency, as shown in Fig. 1.
 
 <center>

![Alt text](images/13.png)
<br>
Fig. 1 Comparing response of system, with and without absorber
 </center>
 An additional spring mass system is attached to the main spring mass system, so that the resonance of the original system will not occur. The addition of spring mass system results in a two degree of freedom system, having two natural frequencies. General applications include reciprocating tools such as saws, drills, rotary hammers which requires to balance the reciprocating force. Fig. 2 shows a schematic representation of an undamped dynamic vibration absorber.

 <center>

 ![Alt text](images/3.png)

Fig. 2 Undamped dynamic vibration absorber.

</center>

Mathematically, a mass $m_2$ attached to a machine of mass $m_1$, through a stiffness of $k_2$, will be
 <center>

<!-- ![Alt text](images/4.png) -->

$m_1 \ddot{x}_1 + k_1 x_1 + k_2 (x_1 - x_2) = F_0 \sin \omega t $  
$m_2 \ddot{x}_2 + k_2 (x_2 - x_1) = 0$

</center>

By assuming harmonic solution, 
 <center>

<!-- ![Alt text](images/5.png) -->

$x_j(t) = X_j \sin \omega t, \quad j = 1, 2$

</center>

The steady state amplitudes are,

 <center>

<!-- ![Alt text](images/6.png) -->

$X_1 = \frac{(k_2 - m_2 \omega^2) F_0}{(k_1 + k_2 - m_1 \omega^2)(k_2 - m_2 \omega^2) - k_2^2} $  
$X_2 = \frac{k_2 F_0}{(k_1 + k_2 - m_1 \omega^2)(k_2 - m_2 \omega^2) - k_2^2}$

</center>

To reduce amplitude of $m_1$, $X_1$ is substituted as zero, leading to 
 <center>

<!-- ![Alt text](images/7.png) -->

$\omega^2 = \frac{k_2}{m_2}$

</center>
The absorber is designed such that the amplitude of vibration of the machine, while operating at its original resonant frequency, will be zero.
<br>
By defining,
 <center>

<!-- ![Alt text](images/8.png) -->

$\delta_{st} = \frac{F_0}{k_1}$

</center>
and the natural frequency of m<sub>1</sub> and m<sub>2</sub> as &omega;<sub>1</sub> and &omega;<sub>2</sub> ,
 <center>

<!-- ![Alt text](images/9.png)![Alt text](images/10.png) -->

$\omega_1 = \left( \frac{k_1}{m_1} \right)^{1/2}$
$\omega_2 = \left( \frac{k_2}{m_2} \right)^{1/2}$


</center>

The steady state amplitudes can be written as,
<center> 

<!-- ![Alt text](images/11.png) -->

$\frac{X_1}{\delta_{st}} = \frac{1 - \left( \frac{\omega}{\omega_2} \right)^2}{\left[ 1 + \frac{k_2}{k_1} - \left( \frac{\omega}{\omega_1} \right)^2 \right] \left[ 1 - \left( \frac{\omega}{\omega_2} \right)^2 \right] - \frac{k_2}{k_1}} $  
$\frac{X_2}{\delta_{st}} = \frac{1}{\left[ 1 + \frac{k_2}{k_1} - \left( \frac{\omega}{\omega_1} \right)^2 \right] \left[ 1 - \left( \frac{\omega}{\omega_2} \right)^2 \right] - \frac{k_2}{k_1}}$


</center>

At $\omega=\omega_1$ substituting $X_1 = 0$, which gives,

 <center> 

<!-- ![Alt text](images/12.png) -->

$X_2 = -\frac{k_1}{k_2} \delta_{st} = -\frac{F_0}{k_2}$

</center>

This shows that the force exerted by the auxiliary spring is opposite to the impressed force, neutralizing it, thus reducing $X_1$ to zero.
