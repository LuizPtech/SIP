import React from "react";
import "./page.css";
import Banner from "../../assets/banner.png";
import Whatsapp from "../../assets/whatsapp.png";
import Praticidade from "../../assets/praticidade.png";
import Eficacia from "../../assets/eficacia.png";
import Velocidade from "../../assets/velocidade.png";
import sip_logo from "../../assets/sip_logo.png";
import Carousel from "./Carousel";

function Components() {
  return (
    <>
      <section className="container d-flex flex-column h-100 justify-content-between z-1 ">
        <div className="logo-container">
          <img src={sip_logo} alt="Logo" />
        </div>
        <div className="d-flex flex-column w-100 h-50 gap-5 container-md position-relative">
          <div className="bg-warning w-25 p-3 rounded-5 mb-5 gradient" />
          <p className="full_width fs-4 fw-light">
            Integrando inteligência e performance para desenvolver uma solução
            que simplifica tanto a gestão quanto a operação.
          </p>
          <div className="d-flex gap-3 full_width">
            <a
              href="https://wa.me/5561996887965"
              className="fs-4 d-flex justify-content-center align-items-center gap-2 btn btn-primary btn-lg border border-3 border-primary rounded-5 text-capitalize fw-bold"
            >
              <img src={Whatsapp} className="img" alt="" />
              Contato
            </a>
            <a
              href="https://sip-santritecnologia.dynns.com:3000"
              target="_blank"
              className="fs-4 btn border border-primary border-3 rounded-5 text-capitalize fw-bold text-white"
            >
              Entrar
            </a>
          </div>
          <div className="z-0 conteiner-img-banner">
            <img src={Banner} alt="Banner" className="object-fit-cover" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center text-center dotted-border rounded-5 p-3 bg-terceary-santri mt-4">
          <p className="fs-1 fw-bold mb-0">
            Por que usar o <span className="text-uppercase">SIP</span>?
          </p>
          <p className="fs-3 fw-semibold mb-0">
            Praticidade e eficácia na palma de sua mão.
          </p>
        </div>
        <div></div>
      </section>

      <section className="bg-secundary-santri py-5">
        <div className="container py-5 d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5">
            <div className="col card bg-transparent text-center border border-0">
              <div className="card-body bg-primary-santri rounded-5 px-3 py-5 dotted-border">
                <img
                  src={Praticidade}
                  alt="img card-img-top"
                  className="img-card"
                />
                <h4 className="card-title text-white fw-bold text-capitalize">
                  Praticidade
                </h4>
                <p className="card-text text-white">
                  Acesse as informações do seu negocio em qualquer lugar
                  utilizando qualquer dispositivo.
                </p>
              </div>
            </div>

            <div className="col card bg-transparent text-center border border-0">
              <div className="card-body bg-primary-santri rounded-5 px-3 py-5 dotted-border">
                <img src={Eficacia} alt="img card" className="img-card" />
                <h4 className="card-title text-white fw-bold text-capitalize">
                  Eficácia
                </h4>
                <p className="text-white">
                  Confira as informações mais importantes de seu negocio para
                  tomadas de decisão mais assertiva.
                </p>
              </div>
            </div>

            <div className="col card bg-transparent text-center border border-0">
              <div className="card-body bg-primary-santri rounded-5 px-3 py-5 dotted-border">
                <img
                  src={Velocidade}
                  alt="img card"
                  className="img-card "
                />
                <h5 className="card-title text-white fw-bold text-capitalize">
                  Velocidade
                </h5>
                <p className="text-white ">
                  As informações na palma de sua mão de uma maneira mais rápida
                  e pratica para decisões mais rápidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-santri py-4">
        <div className="container py-5 d-flex justify-content-center">
          <div className="text-center dotted-border rounded-5 p-3 bg-secundary-santri">
            <p className="fs-2 fw-bold mb-0 text-primary-emphasis mb-4">
              Grandes gestores utilizam o{" "}
              <span className="text-uppercase">SIP</span> para facilitar seu
              dia-a-dia.
            </p>
            <Carousel />
          </div>
        </div>
      </section>

      <section className="bg-secundary-santri py-4">
        <div className="container py-5 d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center flex-column gap-4 text-center dotted-border rounded-5 py-4 px-5 bg-primary-santri ">
            <h2 className="fs-2 fw-bold">
              Venha fazer parte da #
              <span className="text-uppercase">SIPE</span>xperience
            </h2>
            <p className="fs-4">
              Entre em contato e solicite um orçamento.
            </p>
            <a
              href="https://wa.me/5561996887965"
              className="fs-4 d-inline-flex justify-content-center align-items-center gap-2 btn btn-lg btn-primary btn-lg border border-3 border-primary rounded-5 text-capitalize fw-bold"
            >
              <img src={Whatsapp} className="img" alt="" />
              Contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Components;
