<p>Trabajo Práctico Integrador JAVA <br> <strong>(FRONTEND)</strong> Consigna:
Deberán replicar la siguiente página principal con lo visto en clase hasta el momento, se recomienda usar bootstrap, se permiten cambios en el diseño;</p>

![final_front](img/final_front.jpg)

<div align="center">
<img src="img/trio.png" alt="logo de html, js y css" width="120" style="margin:0 40px 20px;"/>

<img src="img/bootstrap-logo.png" alt="logo de Bootstrap" width="80" style="margin-bottom:10px;"/>

<img src="img/git.png" alt="logo de git" width="150" style="margin:10px;"/>

<img src="img/Logo_github.jpg" alt="logo de GitHub" width="150"/>
</div>

<p>* Descripción del proyecto:</p>
<p>1- Barra de navegación que colapsa y se transforma en un menú hamburguesa funcional (Header);</p>

<p>2- Portada, la cual tiene una imagen como background. Sobre esta texto y botones;</p>

<p>3- Cards con imagenes, botones y texto;</p>

<p>4- Carrusel con 3 diapositivas, imágenes  y texto, con controles anterior/siguiente e indicadores. Los indicadores permiten a los usuarios saltar directamente a una diapositiva en particular;</p>

<p>5- Un pequeño formulario, un área de texto donde los usuarios pueden escribir sus comentarios, un botón de enviar y un botón (link) que te dirige a la página Backend, los botones tienen efecto de animación;</p>

<p>6- Y en el pie de página un carrusel de reproducción automática (sólo con texto). Este corrusel se pausa automáticamente cuando se pasa el mouse sobre él. El carrusel tiene controles anterior/siguiente;</p>

<p><strong>(BACKEND)</strong> Consigna: Deberán replicar la siguiente sección. La cual deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $ ”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior;</p>

![final_front](img/Final_front_2.png)

<p>Procedimiento:</p>

<p>**HTML**</p>

<p>1- Se crean los campos del formulario: cantidad (input tipo number), categoría (select) y total (input tipo text solo lectura);</p>

<p>2- Se incluye un botón que llama a la función `calculateTotal()` cuando se hace clic;</p>

<p>**JavaScript**</p>

<p>3- `PRICE_PER_TICKET` es el precio base de cada boleto;</p>

<p>4- `DISCOUNTS` es un objeto que contiene los descuentos para cada categoría;</p>

<p>5- `calculateTotal()` es la función que se ejecuta al hacer clic en el botón de resumen. Obtiene la cantidad y categoría seleccionadas, calcula el precio total después del descuento, y actualiza el campo de total;</p>

<p>6- La página es responsive de ambos lados (Front/Back).</p>

<div align="center">
<img src="img/pink-panter.gif" alt="logo de GitHub" width="150"/>
</div>