"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  Sparkles,
} from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      0.5
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        0.8
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        1.1
      );
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2B2B2B]/30 to-black z-0" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas shadows dpr={[1, 2]}>
          <fog attach="fog" args={["#000000", 5, 20]} />
          <ambientLight intensity={0.5} />
          <Scene isMobile={isMobile} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={5}
            autoRotate
            autoRotateSpeed={5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 opacity-0">
          <span className="block">Vision</span>
          <span className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-transparent">
            Pro
          </span>
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-[#D3D3D3] max-w-2xl mb-8 opacity-0">
          Experience the future of spatial computing. A revolutionary device
          that blends digital content with your physical space.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 opacity-0">
          <Button className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] text-black hover:opacity-90 transition-opacity px-8 py-6 text-lg">
            Discover the Future
          </Button>
          <Button
            variant="outline"
            className="border-[#9400D3] text-[#9400D3] hover:bg-[#9400D3]/10 px-8 py-6 text-lg"
          >
            Watch the Film
          </Button>
        </div>
      </div>
    </section>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <Environment preset="night" />

      <HeadsetModel position={[0, 0, 0]} scale={isMobile ? 5 : 5.5} />

      <Sparkles
        count={1000}
        scale={10}
        size={2}
        speed={0.1}
        opacity={0.5}
        color="#00FFFF"
      />

      {/* <GridFloor /> */}
    </>
  );
}

export function HeadsetModel({ ...props }) {
  const { nodes, materials } = useGLTF("/apple-vision-pro.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.003, 0.047, -0.001]}
        rotation={[1.398, -0.379, 0.383]}
        scale={0.03}
      >
        <group scale={100}>
          <group rotation={[-1.391, 0.433, 0.282]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.KDGFLTXqIYVblBJ as THREE.Mesh).geometry}
                material={materials.FAJMtZQLswdvuhO}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.obpGPOxscQRBrFJ as THREE.Mesh).geometry}
                material={materials.VxpiigirruNOshp}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.oSgdXMJmmhZQCzN as THREE.Mesh).geometry}
                material={materials.FFhjkYvBaxmGeMa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.SCIkocbuHjjNTsA as THREE.Mesh).geometry}
                material={materials.ZwEHHHBVBsIGFLj}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.zzrLLSPyJZILSKY_0 as THREE.Mesh).geometry}
                material={materials.FFhjkYvBaxmGeMa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ASkoYyVECEcxkYK_0 as THREE.Mesh).geometry}
                material={materials.AjnVirXQeiPgFmd}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.EiAonKsxDEuXxGR_0 as THREE.Mesh).geometry}
                material={materials.xYIhbFReGzikXuj}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.IiAxItryhcbgzau_0 as THREE.Mesh).geometry}
                material={materials.FEdJjbtHQhrLkPc}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.IUxpbXmRrlbzURT_0 as THREE.Mesh).geometry}
                material={materials.msHgsHSWlHxyhfo}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.khLVByUFFaNMLSm_0 as THREE.Mesh).geometry}
                material={materials.TapGHbYtpjcGEyh}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.NIpSDFsUWUCOqdg_0 as THREE.Mesh).geometry}
                material={materials.XHmyiGBFGvanMAr}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.sfTtJVBhwbMtpKx_0 as THREE.Mesh).geometry}
                material={materials.GvidsfHBLmyLFLj}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.wMmLVLlxQNpoxwu_0 as THREE.Mesh).geometry}
                material={materials.gTQYGMoqLgKFhDN}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ZpjYSYThqJeqGFZ_0 as THREE.Mesh).geometry}
                material={materials.XHmyiGBFGvanMAr}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.HpwVpTrPEytuUsV as THREE.Mesh).geometry}
                material={materials.LCFAOHKyQkTpEQF}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.IXuJiiCFSNvsmGR as THREE.Mesh).geometry}
                material={materials.dFHMyPBpPqeTjiL}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.jlIHzUMKnDyxeBA as THREE.Mesh).geometry}
                material={materials.fBnoCDaWrdqLbCS}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.YEoDlcPCcODxkbN as THREE.Mesh).geometry}
                material={materials.JvGMyHWKpFKorez}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.DesySQuVkxDlAlp_0 as THREE.Mesh).geometry}
                material={materials.DesySQuVkxDlAlp_0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.gRhjqEgpPdWDhFH as THREE.Mesh).geometry}
                material={materials.lagreFFLwlIcTJO}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ltNMRLYerdBLGAz as THREE.Mesh).geometry}
                material={materials.uCIAdpMWlBjnYvL}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.SFnscRcMcAMgche as THREE.Mesh).geometry}
                material={materials.svovjBXowKlgbKD}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.swZapDaNVUxFTRq as THREE.Mesh).geometry}
                material={materials.svovjBXowKlgbKD}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.vxWoDJDXdJFnuSs as THREE.Mesh).geometry}
                material={materials.oRyqyBedXgltlyh}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.dcRUNTSwcozgcqO as THREE.Mesh).geometry}
                material={materials.svovjBXowKlgbKD}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.iweCqUsEZGYMjLj as THREE.Mesh).geometry}
                material={materials.svovjBXowKlgbKD}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.QWzDeiNdlTmLsaj as THREE.Mesh).geometry}
                material={materials.oRyqyBedXgltlyh}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.SqyAKiTAbYxFiMT_0 as THREE.Mesh).geometry}
                material={materials.DesySQuVkxDlAlp_0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.wBSkYahuvsEAlXg as THREE.Mesh).geometry}
                material={materials.lagreFFLwlIcTJO}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.yWGyQnAhCiOYRbg as THREE.Mesh).geometry}
                material={materials.uCIAdpMWlBjnYvL}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.CJWfACsrSRGJXyf as THREE.Mesh).geometry}
                material={materials.QqwPOMufQnLHpVb}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.glyogFqKCZxZDOT as THREE.Mesh).geometry}
                material={materials.lagreFFLwlIcTJO}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ZresYrVJWrzYduC as THREE.Mesh).geometry}
                material={materials.lagreFFLwlIcTJO}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.AWbZOEfuRQAvVTP as THREE.Mesh).geometry}
                material={materials.XNhEODEcVemrRSu}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.DxrCMpAwhniUBfl as THREE.Mesh).geometry}
                material={materials.pMiARQLBeNgKOAx}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.IEooweRjLNVZPqx as THREE.Mesh).geometry}
                material={materials.NJTstBdwEqVPDBG}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.SRKTTAWIPJHVYpM as THREE.Mesh).geometry}
                material={materials.UvuKGGVdlOxVUeA}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.vIfAfiWawaJWGqD as THREE.Mesh).geometry}
                material={materials.pMiARQLBeNgKOAx}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.zOojMjLvernppMe as THREE.Mesh).geometry}
                material={materials.ySrzecxrjVirfze}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.gCMrtHacMMbsVtY as THREE.Mesh).geometry}
                material={materials.hzzIZvnSVXHRIpk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.yoKCFECQuCmdFPt as THREE.Mesh).geometry}
                material={materials.LrbPxjZrLaPVhbL}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.cTCOfMLBXoYxhne as THREE.Mesh).geometry}
                material={materials.NHDhsOMHMgThpCN}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.EbXtcbKMemPvJWo_0 as THREE.Mesh).geometry}
                material={materials.NHDhsOMHMgThpCN}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.MeGztcuEjPuJXZJ as THREE.Mesh).geometry}
                material={materials.gTQYGMoqLgKFhDN}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.tkgmgHsnFBmdriF as THREE.Mesh).geometry}
                material={materials.NLXCMSpYzHeRKCy}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.uLmdthzQafdZhtY as THREE.Mesh).geometry}
                material={materials.HjiVKkmzDRBQwcd}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.YloUIBCKBFoZsyn as THREE.Mesh).geometry}
                material={materials.nirjontYTAixgEJ}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.NeorRpMRORinszX as THREE.Mesh).geometry}
                material={materials.OcjoBBhHkqmGEeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.EiWAFcSpgUbRfLC as THREE.Mesh).geometry}
                material={materials.HjiVKkmzDRBQwcd}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.LttGJckIvzcXqfr as THREE.Mesh).geometry}
                material={materials.nirjontYTAixgEJ}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.tNyidXzsanoTPLC as THREE.Mesh).geometry}
                material={materials.NLXCMSpYzHeRKCy}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ttGMShCisdkbKAx_0 as THREE.Mesh).geometry}
                material={materials.NHDhsOMHMgThpCN}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.xyBlAAQKYgueyAl as THREE.Mesh).geometry}
                material={materials.gTQYGMoqLgKFhDN}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.jjJIZDrSILBzxpu as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.cTBEkXCWkvHrohb as THREE.Mesh).geometry}
                material={materials.LlnrRvRtBSKKJtZ}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.jmyvTSbhlLzcdVy as THREE.Mesh).geometry}
                material={materials.IUXXlUlgvhvFPzz}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.vyzuKbgYqRUloHN as THREE.Mesh).geometry}
                material={materials.gFHmZYZAcTzegfV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.BYzAzdYRSKOXgvW as THREE.Mesh).geometry}
                material={materials.gFHmZYZAcTzegfV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.COzyZGNXWoVuulX as THREE.Mesh).geometry}
                material={materials.LlnrRvRtBSKKJtZ}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.txsLdslKWGeEPTt as THREE.Mesh).geometry}
                material={materials.IUXXlUlgvhvFPzz}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.BDnAUbPNZRAcuFf_0 as THREE.Mesh).geometry}
                material={materials.RWqkxBAMyYvCfAW}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.gImAVESIoCwjazi as THREE.Mesh).geometry}
                material={materials.lZazJJAwgeaFFzW}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.hciIxHvmXHAqkAZ_0 as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.IVshDKAKUOpgoit_0 as THREE.Mesh).geometry}
                material={materials.hQMaJbjPDPOUdry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.jZNSaLYonRzXGgY_0 as THREE.Mesh).geometry}
                material={materials.lZazJJAwgeaFFzW}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.syRtTlwvwBGbycm_0 as THREE.Mesh).geometry}
                material={materials.lZazJJAwgeaFFzW}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.xpJqyjMVpSjpaIw as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.aTcrhiBFDpmfQRb as THREE.Mesh).geometry}
                material={materials.kPwwriYXUEalYIj}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.gqNMwQGbnhvlVYE as THREE.Mesh).geometry}
                material={materials.lZazJJAwgeaFFzW}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.npnXECWbsAmgBIA as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.lntlgnzyayryFPp_0 as THREE.Mesh).geometry}
                material={materials.WicotZnvNvRZKUL}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.GlqEjTaipLhaVeX as THREE.Mesh).geometry}
                material={materials.sWxIuDoQFWtTiiB}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.PelEjfQtfCcokND as THREE.Mesh).geometry}
                material={materials.hjAUwLwBADKDzhk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.utXOMjnivVWqOqb as THREE.Mesh).geometry}
                material={materials.GevKBvqYjYnmUWP}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.UXLjllnBycNoaYM_0 as THREE.Mesh).geometry}
                material={materials.FOugkDgsmvxAjLB}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.AxIDAohNCLUnqHZ_0 as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.gyYovHxVbMYfNIs_0 as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.sPvEwoSuAuchoUX as THREE.Mesh).geometry}
                material={materials.HAvYQJgmRpVYpqr}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.EohuhBblivKlgiW as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.zvEZknZipHczcSh as THREE.Mesh).geometry}
                material={materials.snsykSygkWSDIlk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.NnqtZkGomSmVeRm_0 as THREE.Mesh).geometry}
                material={materials.hjAUwLwBADKDzhk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.KYYFwKltpNVwIZF as THREE.Mesh).geometry}
                material={materials.GevKBvqYjYnmUWP}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.PCWXKVLQMLFXuiB as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.wNTsFMcHtcwMFzu_0 as THREE.Mesh).geometry}
                material={materials.hjAUwLwBADKDzhk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.bWGTZHjKQZbtiyV as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ddBlCIbantllDIr as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.fAUXGIjKanMeYea as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.GCtZYOQqcgvnxPi as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.GqNvIoTBBTlyOqi_0 as THREE.Mesh).geometry}
                material={materials.NLAQCwOxsrAPIlV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ItWUvMBTKMADVpz as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.jEXLbqFcYStQaQF as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.MeigMDdpfMwthLL as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.nrLqYYObKenvfDT as THREE.Mesh).geometry}
                material={materials.nctcFIvFhZfKDLQ}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.wPwRzjPYjmrlEXX as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.HsgHlwEylVMvWpH as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.hXjngMziGWeRsLG as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.JlZUAmaWBjQdvyx as THREE.Mesh).geometry}
                material={materials.nctcFIvFhZfKDLQ}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.kpOufxRkGzbfIDK as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.loKnjuoUUqCXjyh as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.LRMIvaRwBWdAizA_0 as THREE.Mesh).geometry}
                material={materials.NLAQCwOxsrAPIlV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.mYnwxJZquqykmUm as THREE.Mesh).geometry}
                material={materials.kEEsgKvKWifaKeg}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.RNQzvxThOUKSCWj as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.vJNXctsYfhEHtrV as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.XyedbPFDxeHwCHk as THREE.Mesh).geometry}
                material={materials.svoioOWqcyuDHRV}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.KFVogPQUiddsMSf as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.MspSzkAWtrSNgSu_0 as THREE.Mesh).geometry}
                material={materials.GevKBvqYjYnmUWP}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.ZMUGAWqZYOylVJZ as THREE.Mesh).geometry}
                material={materials.hjAUwLwBADKDzhk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.DxigZplXoWuQGiB as THREE.Mesh).geometry}
                material={materials.snsykSygkWSDIlk}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.TDKyRfvojNkpooB as THREE.Mesh).geometry}
                material={materials.CzTcyZGBTOTEuIC}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/apple-vision-pro.glb");
// function GridFloor() {
//   const gridRef = useRef<THREE.Group>(null);

//   useFrame(({ clock }) => {
//     if (gridRef.current) {
//       gridRef.current.position.y =
//         -2 + Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
//     }
//   });

//   return (
//     <group ref={gridRef} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <gridHelper args={[30, 30, "#39FF14", "#2B2B2B"]} position={[0, 0, 0]} />
//       <mesh receiveShadow>
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial
//           color="#000000"
//           metalness={0.8}
//           roughness={0.5}
//           transparent
//           opacity={0.6}
//         />
//       </mesh>
//     </group>
//   );
// }
