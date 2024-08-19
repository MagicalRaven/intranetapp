import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrivacyNoticePage.css'; // Importa el CSS si estás usando un archivo separado

const PrivacyNoticePage = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Mostrar alerta de aceptación
    alert('Has aceptado los términos de privacidad.');

    // Redirigir al panel de clientes
    navigate('/customer');
  };
  return (
    <div class="politicas">
      <ul>
        <li><h1>AVISO DE PRIVACIDAD INTEGRAL DE INGRAPHOS S.A DE C.V.</h1></li>
        <li><p>Para <strong>INGRAPHOS S.A. DE C.V.</strong> es muy importante la protección de sus datos personales y su derecho 
            a la privacidad. En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de 
            los Particulares (en lo sucesivo “LFPD”) ponemos a su disposición el presente aviso de privacidad 
            integral (en lo sucesivo “Aviso de Privacidad”), y al respecto le informamos lo siguiente:</p></li>
        <li><h2><strong>1.- RESPONSABLE DE LA PROTECCIÓN DE SUS DATOS PERSONALES.</strong></h2></li>
        <li><p><strong>INGRAPHOS S.A. DE C.V.</strong>, con domicilio para oír y recibir notificaciones en GANADEROS 164, 
            GRANJAS ESMERALDA, IZTAPALAPA, CIUDAD DE MEXICO, C.P. 09810 es responsable del tratamiento y 
            protección de los datos personales que recabamos de usted.</p></li>
        <li><h2><strong>2.- INFORMACIÓN SOBRE EL PROCESO DE RECEPCIÓN DE DATOS PERSONALES.</strong></h2></li>
        <li><p>Nuestro Departamento de Administración De Datos Personales es el área asignada por la empresa 
            de recibir, tratar y vigilar el cumplimiento del artículo 30 de la LFPD, para: (I) Atender las 
            solicitudes de los titulares para el ejercicio de sus derechos; (II) fomentar y velar por la 
            protección de los datos personales que tenemos en nuestra posesión. Para todo lo relacionado con
            el tratamiento y protección de los datos personales, usted podrá contactarse con nuestro 
            Departamento de Administración de Datos Personales enviando un correo electrónico a la siguiente dirección:
            adm-privacidad@ingraphos.com.mx.</p></li>
        <li><h2><strong>3.- DATOS PERSONALES QUE RECABAMOS.</strong></h2></li>
        <li><p>Para realizar las finalidades señaladas en el numeral 4 (cuatro) del presente Aviso de Privacidad, 
            recabaremos datos personales de las siguientes categorías: (i) Identificación; (II) contacto; (III) 
            referencias comerciales; (IV) financieros; (V) datos electrónicos, referencias de los productos y 
            servicios relacionados con nuestros servicios.</p></li>
        <li><h2><strong>4.- FINALIDADES DEL TRATAMIENTO DE LOS DATOS PERSONALES RECABADOS.</strong></h2></li>
        <li><p>Su información personal será utilizada para las siguientes finalidades principales: (I) Identificarlo; 
            (II) registrarlo en nuestros sistemas como cliente o prospecto de cliente; (III) 
            contactarlo por cualquier medio incluyendo servicios de mensajería instantánea, chat en línea 
            y redes sociales; (IV) posibilitarle el uso de nuestros servicios web relacionados con nuestros 
            productos o servicios incluyendo los servicios de diseño, fabricación e instalación de anuncios 
            e imagen; (V) para la creación de un identificador de usuario con el objeto de informarle acerca 
            de la ejecución de los proyectos en  los que tenemos participación ;(VI) proporcionarle la información 
            que nos solicite; (VII) realizar gestión de crédito y/o o cobranza, (VIII) proveerle los productos 
            y/o servicios incluyendo los servicios de fabricación e instalación de anuncios que solicita o contrata
            con nosotros; (IX) facturar los productos y/o servicios que adquiera; (X) proporcionarle atención de 
            posventa; (XI) hacer valida la garantía de sus productos o servicios; (XII) atender cualquier queja, 
            pregunta o comentario realizado por usted respecto de nuestros productos y/o servicios.
        </p></li>
        <li><p>Adicionalmente, su información personal será utilizada con las siguientes finalidades secundarias: 
            (I) realizar estadísticas y encuestas de satisfacción relacionadas a los procesos de compra o servicio 
            mismas que podrían ser efectuadas a través de aplicaciones de mensajería instantánea; (II) informarle 
            por cualquier medio de nuestros productos y/o servicios; (III) investigación, análisis de mercado, 
            perfilamiento de cliente y situación comercial; (IV) para la creación, estudio y análisis de su 
            comportamiento en nuestros sitios web y aplicaciones para personalizar, optimizar y mejorar su 
            experiencia con la marca, sus productos y servicios. </p></li>
        <li><h2><strong>4.1.- NEGATIVA AL TRATAMIENTO DE LOS DATOS PERSONALES PARA FINALIDADES SECUNDARIAS.</strong></h2></li>
        <li><p>En caso de que no desee que los datos personales sean tratados para las finalidades
             secundarias mencionadas, o alguna de ellas, puede negarnos su consentimiento desde este 
             momento enviando su solicitud a nuestro Departamento de Administración de Datos Personales a través del correo 
             electrónico adm-privacidad@ingraphos.com.mx,  que le indicará el procedimiento a seguir para 
             ejercer su derecho. Su negativa en este sentido no afectará su relación con nosotros.</p></li>
        <li><h2><strong>5.- TRANSFERENCIA DE SUS DATOS PERSONALES.</strong></h2></li>
        <li><p>Le informamos que sus datos personales podrán ser transferidos, sin que legalmente se requiera
             su consentimiento, a las siguientes personas físicas o morales: (I) autoridades competentes, con
              la finalidad de dar cumplimiento a alguna ley, reglamento o disposición legal aplicable, o a 
              algún mandato debidamente fundado y motivado; (II) Personal interno que operen bajo nuestros 
              mismos procesos y políticas internas, con la finalidad de brindarle un mejor servicio; darle 
              seguimiento a clientes potenciales; cumplir con nuestra normativa interna y procesos; así como 
              realizar actividades publicitarias, promocionales y mercadotecnia, para el cumplimiento del 
              contrato de prestación de servicios de fabricación e instalación de anuncios; cumplimiento de 
              la garantía del fabricante; así como para que le efectúen llamados a revisión post- venta en 
              relación con los contratos celebrados o por celebrar. Sus datos personales podrán igualmente 
              ser transferidos, sin su consentimiento, en caso de actualizarse alguno de los supuestos 
              contemplados por el artículo 37 de la LFPD.
            </p></li>
        <li><p>Su negativa la puede manifestar desde este momento enviando un correo electrónico a 
            nuestro Departamento de Administración de Datos Personales a través del correo electrónico 
            dcornejo@ingraphos.com.mx, que le indicará el procedimiento a seguir para ejercer su derecho.</p></li>
        <li><h2><strong>6.- DERECHOS QUE LE CORRESPONDEN.</strong></h2></li>
        <li><p>En los términos permitidos por la normativa aplicable, usted podrá acceder, rectificar 
            o cancelar (eliminar) sus datos personales, así como, oponerse al tratamiento de los mismos y 
            revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que 
            hemos implementado. Para conocer dichos procedimientos, los requisitos y plazos, así como, para 
            externarnos sus comentarios, quejas o sugerencias, le agradeceremos se ponga en contacto con 
            nuestro Departamento de Datos Personales a través del correo electrónico adm-privacidad@ingraphos.com.mx.</p></li>
        <li><h2><strong>7.- MEDIOS PARA LIMITAR EL USO O DIVULGACIÓN DE SUS DATOS PERSONALES.</strong></h2></li>
        <li><p>Además del procedimiento contemplado en la sección inmediata anterior, usted puede limitar el uso o divulgación de sus datos personales en cualquiera de las siguientes formas:
            Registrarse en el “Listado de Exclusión Publicitaria para Clientes de INGRAPHOS S.A. DE C.V.”, con el objeto de que no utilicemos su información personal para finalidades publicitarias, mercadotecnias, promocionales o de prospección comercial. Para solicitar su registro, así como para obtener más información al respecto, usted puede contactar a nuestro Departamento de Administración de Datos Personales a través del correo electrónico adm-privacidad@ingraphos.com.mx, para los correos electrónicos que le enviemos con finalidades promocionales y publicitarias, usted puede manifestar su negativa dando clic a la liga que se acompañará a cada uno de dichos correos para cancelar el envío de información.
            </p></li>
        <li><h2><strong>8.- USO DE COOKIES Y WEB</strong></h2></li>
        <li><p>Hacemos de su conocimiento que en nuestra página de Internet www.ingraphos.mx utilizamos cookies o esquemas similares como identificador de usuario, las cuales son archivos de información que se instalan en el navegador web. A través de las cookies o identificador de usuario es posible monitorear su comportamiento como usuario de Internet, con las finalidades de brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página, así como ofrecerle nuevos productos y servicios basados en sus preferencias.
            Los datos que obtenemos a través de esta tecnología de rastreo son los siguientes: su tipo de navegador y sistema operativo; horario y tiempo de navegación en nuestra página de Internet, secciones consultadas; Páginas de Internet accedidas previo y posterior a la nuestra; los vínculos que sigue; el motor de búsqueda que en su caso haya utilizado para llegar a nuestra página; frecuencia con la que nos visita, o si es la primera vez que lo hace.
            Los datos recabados serán para uso exclusivo de INGRAPHOS S.A. DE C.V., por lo tanto, dichos datos no serán sujetos de transferencias nacionales o internacionales.
            </p></li>
        <li><p>Asimismo, le informamos que usted puede en todo momento deshabilitar estas tecnologías. Para conocer cómo hacerlo, consulte la información técnica del navegador que está utilizando. </p></li>
        <li><h2><strong>9.- INFORMACIÓN SOBRE EL INAI.</strong></h2></li>
        <li><p>Si usted considera que en su derecho a la protección de datos personales ha sido: lesionado por alguna conducta u omisión de nuestra parte, o presume alguna violación a las disposiciones previstas en la LFDP, RLFPD y demás ordenamientos aplicables, podrá interponer su inconformidad o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI). Para más información, le sugerimos visitar su página de internet www.inai.org.mx </p></li>
        <li><h2><strong>10.- CAMBIOS AL AVISO DE PRIVACIDAD.</strong></h2></li>
        <li><p>INGRAPHOS S.A. DE C.V. podrá modificar y/o actualizar el presente Aviso de Privacidad, informándole al respecto a través de cualquiera de los siguientes medios:</p></li>
        <ol>
            <li><p>De forma directa, al último correo electrónico que nos hayas proporcionado.
                </p></li>
            <li><p>En nuestra página de Internet,. El procedimiento es el siguiente: 
                (I) ingrese a nuestra página de Internet www.ingraphos.mx , 
                En caso de haber modificaciones o actualizaciones al presente Aviso de Privacidad, <strong>habrá 
                una notificación que se lo haga saber</strong>; (II) acceda a la liga de aviso de privacidad para clientes; (III) ahí encontrará la versión vigente con la fecha de la más reciente actualización.</p></li>
        </ol>
        <li><h6><i>Fecha de la más reciente actualización: 29 de julio de 2024</i></h6></li>
        </ul>
      <div className="button-container">
        <button className="accept-button" onClick={handleAccept}>
          He leído y acepto la politica de privacidad.
        </button>
      </div>
    </div>
  );
};

export default PrivacyNoticePage;
