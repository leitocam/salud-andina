import React, { useState } from "react";
import { FaVirus, FaShieldAlt, FaCheckCircle, FaPills, FaSyringe, FaBandAid, FaMale, FaFemale, FaRing, FaCapsules, FaVial } from "react-icons/fa";
import "./Orientation.css";

const Orientation = () => {
  const [mainCategory, setMainCategory] = useState("saludSexual");
  const [subCategory, setSubCategory] = useState("its");
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Contenidos dinámicos de Salud Sexual
  const saludSexualContent = {
    its: {
      title: "Infecciones de Transmisión Sexual (ITS)",
      description: "Las ITS son infecciones que se transmiten de una persona a otra a través del contacto sexual.",
      contagio: "Las ITS se transmiten por contacto directo o intercambio de fluidos. También pueden contagiarse durante el embarazo, parto o lactancia.",
      prevencion: "Usa correctamente el condón y evita múltiples parejas sexuales.",
      cura: "Algunas ITS son curables (bacterias y parásitos), pero otras no (virus como el VIH).",
      tips: [
        "Realiza pruebas regulares para detectar ITS.",
        "Habla abiertamente con tu pareja sobre salud sexual.",
        "Vacúnate contra el VPH y la hepatitis B.",
      ],
    },
    vih: {
      title: "Virus de Inmunodeficiencia Humana (VIH)",
      description: "El VIH es un virus que ataca el sistema inmunológico y puede llevar al SIDA si no se trata.",
      contagio: "Principalmente a través de relaciones sexuales sin protección o por vía sanguínea.",
      prevencion: "Uso correcto del condón y pruebas regulares.",
      cura: "El VIH no tiene cura, pero el tratamiento antirretroviral permite llevar una vida saludable.",
      tips: [
        "Usa siempre condón durante las relaciones sexuales.",
        "Realiza pruebas de VIH regularmente.",
        "Sigue el tratamiento antirretroviral si eres positivo.",
      ],
    },
    sida: {
      title: "Síndrome de Inmunodeficiencia Adquirida (SIDA)",
      description: "El SIDA es la etapa avanzada del VIH, donde el sistema inmunológico está gravemente dañado.",
      contagio: "Es la etapa avanzada del VIH. Se desarrolla sin tratamiento adecuado.",
      prevencion: "Pruebas tempranas y tratamiento con antirretrovirales.",
      cura: "No tiene cura, pero puede prevenirse con diagnóstico y tratamiento temprano.",
      tips: [
        "Busca tratamiento temprano si eres positivo en VIH.",
        "Mantén un estilo de vida saludable.",
        "Evita el contacto con fluidos corporales de personas infectadas.",
      ],
    },
    vph: {
      title: "Virus del Papiloma Humano (VPH)",
      description: "El VPH es una infección viral que puede causar verrugas genitales y ciertos tipos de cáncer.",
      contagio: "Por contacto directo piel con piel, especialmente durante las relaciones sexuales.",
      prevencion: "Vacunación y uso de condón.",
      cura: "No tiene cura, pero el sistema inmune puede eliminar el virus en la mayoría de los casos.",
      tips: [
        "Vacúnate contra el VPH.",
        "Realiza chequeos regulares con tu médico.",
        "Usa condón para reducir el riesgo de contagio.",
      ],
    },
    herpesGenital: {
      title: "Herpes Genital",
      description: "El herpes genital es una infección viral que causa llagas dolorosas en los genitales.",
      contagio: "Por contacto directo con las lesiones o fluidos corporales de una persona infectada.",
      prevencion: "Uso de condón y evitar el contacto con lesiones visibles.",
      cura: "No tiene cura, pero los síntomas pueden controlarse con medicamentos antivirales.",
      tips: [
        "Evita el contacto sexual durante los brotes.",
        "Usa medicamentos antivirales según las indicaciones.",
        "Informa a tu pareja si tienes herpes genital.",
      ],
    },
    gonorrea: {
      title: "Gonorrea",
      description: "La gonorrea es una infección bacteriana que afecta las membranas mucosas del tracto reproductivo.",
      contagio: "A través de relaciones sexuales sin protección.",
      prevencion: "Uso de condón y pruebas regulares.",
      cura: "Curable con antibióticos.",
      tips: [
        "Realiza pruebas regulares para detectar gonorrea.",
        "Usa condón durante las relaciones sexuales.",
        "Completa el tratamiento con antibióticos según las indicaciones.",
      ],
    },
    sifilis: {
      title: "Sífilis",
      description: "La sífilis es una infección bacteriana que puede causar complicaciones graves si no se trata.",
      contagio: "A través de relaciones sexuales sin protección y de madre a hijo durante el embarazo.",
      prevencion: "Uso de condón y pruebas regulares.",
      cura: "Curable con antibióticos.",
      tips: [
        "Realiza pruebas regulares para detectar sífilis.",
        "Usa condón durante las relaciones sexuales.",
        "Completa el tratamiento con antibióticos según las indicaciones.",
      ],
    },
    clamidia: {
      title: "Clamidia",
      description: "La clamidia es una infección bacteriana común que puede causar daño reproductivo si no se trata.",
      contagio: "A través de relaciones sexuales sin protección.",
      prevencion: "Uso de condón y pruebas regulares.",
      cura: "Curable con antibióticos.",
      tips: [
        "Realiza pruebas regulares para detectar clamidia.",
        "Usa condón durante las relaciones sexuales.",
        "Completa el tratamiento con antibióticos según las indicaciones.",
      ],
    },
    tricomoniasis: {
      title: "Tricomoniasis",
      description: "La tricomoniasis es una infección parasitaria que causa síntomas genitales incómodos.",
      contagio: "A través de relaciones sexuales sin protección.",
      prevencion: "Uso de condón y pruebas regulares.",
      cura: "Curable con medicamentos antiparasitarios.",
      tips: [
        "Realiza pruebas regulares para detectar tricomoniasis.",
        "Usa condón durante las relaciones sexuales.",
        "Completa el tratamiento con medicamentos antiparasitarios según las indicaciones.",
      ],
    },
    hepatitisB: {
      title: "Hepatitis B",
      description: "La hepatitis B es una infección viral que afecta el hígado y puede causar enfermedades crónicas.",
      contagio: "A través de relaciones sexuales sin protección y contacto con sangre infectada.",
      prevencion: "Vacunación y uso de condón.",
      cura: "No tiene cura, pero la infección puede controlarse con medicamentos.",
      tips: [
        "Vacúnate contra la hepatitis B.",
        "Usa condón durante las relaciones sexuales.",
        "Evita compartir agujas o jeringas.",
      ],
    },
  };

  // Contenidos dinámicos de Métodos Anticonceptivos
  const anticonceptivosContent = {
    cortaDuracion: [
      {
        title: "Píldoras anticonceptivas",
        description: "Son pastillas que contienen hormonas (Estrógeno - Progesterona), parecidas a las que produce la mujer.",
        uso: "Se ingiere entre el primer y quinto día de la menstruación.",
        efectividad: "Más del 99% si se usa de manera correcta.",
        quienPuede: "Mujeres a partir de los 14 años.",
        tips: [
          "Toma la píldora a la misma hora todos los días.",
          "Consulta a tu médico si olvidas una dosis.",
        ],
      },
      {
        title: "Inyectable mensual",
        description: "Método hormonal de corta duración que se aplica cada mes.",
        uso: "Debe ser administrado por un profesional de salud.",
        efectividad: "Más del 99% si se aplica correctamente.",
        quienPuede: "Ideal para mujeres que desean un método temporal.",
        tips: [
          "Programa tus citas para la inyección con anticipación.",
          "Consulta a tu médico sobre posibles efectos secundarios.",
        ],
      },
      {
        title: "Inyectable trimestral",
        description: "Método hormonal de larga duración que se aplica cada 3 meses.",
        uso: "Debe ser administrado por un profesional de salud.",
        efectividad: "Alta efectividad si se aplica en el tiempo indicado.",
        quienPuede: "Mujeres que desean planificación prolongada.",
        tips: [
          "Programa tus citas para la inyección con anticipación.",
          "Consulta a tu médico sobre posibles efectos secundarios.",
        ],
      },
      {
        title: "Parche anticonceptivo",
        description: "Método hormonal que se aplica sobre la piel y se cambia semanalmente.",
        uso: "Cambia el parche semanalmente según las indicaciones.",
        efectividad: "Alta efectividad si se usa correctamente.",
        quienPuede: "Mujeres con buena tolerancia a los métodos hormonales.",
        tips: [
          "Asegúrate de que el parche esté bien adherido a la piel.",
          "Cambia el parche el mismo día cada semana.",
        ],
      },
      {
        title: "Condón Masculino",
        description: "Método de barrera que se coloca sobre el pene erecto antes de la relación sexual.",
        uso: "Debe colocarse correctamente antes de cualquier contacto sexual.",
        efectividad: "Alta efectividad si se usa correctamente.",
        quienPuede: "Hombres de todas las edades.",
        tips: [
          "Usa un nuevo condón en cada relación sexual.",
          "Almacena los condones en un lugar fresco y seco.",
        ],
      },
      {
        title: "Condón Femenino",
        description: "Método de barrera que se coloca dentro de la vagina antes de la relación sexual.",
        uso: "Debe colocarse correctamente antes de cualquier contacto sexual.",
        efectividad: "Alta efectividad si se usa correctamente.",
        quienPuede: "Mujeres de todas las edades.",
        tips: [
          "Usa un nuevo condón en cada relación sexual.",
          "Asegúrate de que el condón esté bien colocado antes del contacto sexual.",
        ],
      },
      {
        title: "Anillo vaginal",
        description: "Dispositivo hormonal que se coloca dentro de la vagina y se cambia mensualmente.",
        uso: "Debe colocarse correctamente y cambiarse cada mes.",
        efectividad: "Alta efectividad si se usa correctamente.",
        quienPuede: "Mujeres con buena tolerancia a los métodos hormonales.",
        tips: [
          "Cambia el anillo el mismo día cada mes.",
          "Consulta a tu médico sobre posibles efectos secundarios.",
        ],
      },
      {
        title: "Anticocepción oral de emergencia",
        description: "Píldoras que se toman después de una relación sexual sin protección para prevenir el embarazo.",
        uso: "Debe tomarse lo antes posible después de la relación sexual.",
        efectividad: "Alta efectividad si se toma dentro de las primeras 72 horas.",
        quienPuede: "Mujeres de todas las edades.",
        tips: [
          "Toma la píldora lo antes posible después de la relación sexual.",
          "Consulta a tu médico si tienes dudas sobre su uso.",
        ],
      },
      {
        title: "Óvulos anticonceptivos",
        description: "Óvulos que se colocan en la vagina antes de la relación sexual para prevenir el embarazo.",
        uso: "Debe colocarse correctamente antes de cualquier contacto sexual.",
        efectividad: "Moderada efectividad si se usa correctamente.",
        quienPuede: "Mujeres de todas las edades.",
        tips: [
          "Sigue las instrucciones de uso del fabricante.",
          "Consulta a tu médico si tienes dudas sobre su uso.",
        ],
      },
    ],
    largaDuracion: [
      {
        title: "Implante subdérmico",
        description: "Dispositivo hormonal que se coloca bajo la piel del brazo y dura varios años.",
        uso: "Debe ser colocado por un profesional de salud.",
        efectividad: "Alta efectividad a largo plazo.",
        quienPuede: "Mujeres que desean planificación prolongada.",
        tips: [
          "Consulta a tu médico sobre posibles efectos secundarios.",
          "Realiza chequeos regulares para asegurar el correcto funcionamiento del implante.",
        ],
      },
      {
        title: "Dispositivo intrauterino (DIU)",
        description: "Dispositivo que se coloca en el útero y puede durar varios años.",
        uso: "Debe ser colocado por un profesional de salud.",
        efectividad: "Alta efectividad a largo plazo.",
        quienPuede: "Mujeres que desean planificación prolongada.",
        tips: [
          "Consulta a tu médico sobre posibles efectos secundarios.",
          "Realiza chequeos regulares para asegurar el correcto funcionamiento del DIU.",
        ],
      },
      {
        title: "DIU hormonal",
        description: "Dispositivo intrauterino que libera hormonas y puede durar varios años.",
        uso: "Debe ser colocado por un profesional de salud.",
        efectividad: "Alta efectividad a largo plazo.",
        quienPuede: "Mujeres que desean planificación prolongada.",
        tips: [
          "Consulta a tu médico sobre posibles efectos secundarios.",
          "Realiza chequeos regulares para asegurar el correcto funcionamiento del DIU.",
        ],
      },
      {
        title: "Ligadura de trompas",
        description: "Procedimiento quirúrgico que bloquea las trompas de Falopio para prevenir el embarazo.",
        uso: "Debe ser realizado por un profesional de salud.",
        efectividad: "Alta efectividad permanente.",
        quienPuede: "Mujeres que no desean tener más hijos.",
        tips: [
          "Consulta a tu médico sobre el procedimiento y sus implicaciones.",
          "Realiza chequeos regulares después del procedimiento.",
        ],
      },
      {
        title: "Vasectomía",
        description: "Procedimiento quirúrgico que bloquea los conductos deferentes para prevenir el embarazo.",
        uso: "Debe ser realizado por un profesional de salud.",
        efectividad: "Alta efectividad permanente.",
        quienPuede: "Hombres que no desean tener más hijos.",
        tips: [
          "Consulta a tu médico sobre el procedimiento y sus implicaciones.",
          "Realiza chequeos regulares después del procedimiento.",
        ],
      },
    ],
  };

  // Renderizado dinámico del contenido
  const renderContent = () => {
    if (mainCategory === "saludSexual") {
      const content = saludSexualContent[subCategory];
      return (
        <div className="infoSection">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <div className="card">
            <FaVirus className="icon" />
            <p><strong>¿Cómo se contagia?:</strong> {content.contagio}</p>
          </div>
          <div className="card">
            <FaShieldAlt className="icon" />
            <p><strong>¿Cómo prevenir?:</strong> {content.prevencion}</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p><strong>¿Tiene cura?:</strong> {content.cura}</p>
          </div>
          {content.tips && (
            <div className="tipsSection">
              <h4>Consejos Prácticos</h4>
              <ul>
                {content.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    } else if (mainCategory === "metodosAnticonceptivos") {
      const methods = anticonceptivosContent[subCategory];
      return (
        <div className="infoSection">
          <div className="methodSelector">
            {methods && methods.map((method, index) => (
              <button
                key={index}
                className={selectedMethod === index ? "active" : ""}
                onClick={() => setSelectedMethod(index)}
              >
                {method.title}
              </button>
            ))}
          </div>
          {methods && methods.map((method, index) => (
            selectedMethod === index && (
              <div key={index} className="card selected">
                {method.title.includes("Píldoras") && <FaPills className="icon" />}
                {method.title.includes("Inyectable") && <FaSyringe className="icon" />}
                {method.title.includes("Parche") && <FaBandAid className="icon" />}
                {method.title.includes("Condón Masculino") && <FaMale className="icon" />}
                {method.title.includes("Condón Femenino") && <FaFemale className="icon" />}
                {method.title.includes("Anillo vaginal") && <FaRing className="icon" />}
                {method.title.includes("Anticocepción oral de emergencia") && <FaCapsules className="icon" />}
                {method.title.includes("Óvulos anticonceptivos") && <FaVial className="icon" />}
                <h3>{method.title}</h3>
                <p><strong>Descripción:</strong> {method.description}</p>
                <p><strong>¿Cuándo usarlo?:</strong> {method.uso}</p>
                <p><strong>Efectividad:</strong> {method.efectividad}</p>
                <p><strong>¿Quién puede usarlo?:</strong> {method.quienPuede}</p>
                {method.tips && (
                  <div className="tipsSection">
                    <h4>Consejos Prácticos</h4>
                    <ul>
                      {method.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      );
    }
  };

  return (
    <div className="orientationWrapper">
      <div className="orientationContainer">
        {/* Selector de categoría principal */}
        <div className="categorySelector">
          <button
            className={mainCategory === "saludSexual" ? "active" : ""}
            onClick={() => {
              setMainCategory("saludSexual");
              setSubCategory("its");
              setSelectedMethod(null);
            }}
          >
            Salud Sexual
          </button>
          <button
            className={mainCategory === "metodosAnticonceptivos" ? "active" : ""}
            onClick={() => {
              setMainCategory("metodosAnticonceptivos");
              setSubCategory("cortaDuracion");
              setSelectedMethod(null);
            }}
          >
            Métodos Anticonceptivos
          </button>
        </div>

        {/* Selector de subcategorías */}
        {mainCategory === "saludSexual" && (
          <div className="subcategorySelector">
            {Object.keys(saludSexualContent).map((key) => (
              <button
                key={key}
                className={subCategory === key ? "active" : ""}
                onClick={() => {
                  setSubCategory(key);
                  setSelectedMethod(null);
                }}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {mainCategory === "metodosAnticonceptivos" && (
          <div className="subcategorySelector">
            <button
              className={subCategory === "cortaDuracion" ? "active" : ""}
              onClick={() => {
                setSubCategory("cortaDuracion");
                setSelectedMethod(null);
              }}
            >
              Corta Duración
            </button>
            <button
              className={subCategory === "largaDuracion" ? "active" : ""}
              onClick={() => {
                setSubCategory("largaDuracion");
                setSelectedMethod(null);
              }}
            >
              Larga Duración
            </button>
          </div>
        )}

        {/* Contenido dinámico */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Orientation;
