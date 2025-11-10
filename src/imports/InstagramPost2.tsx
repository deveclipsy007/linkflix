import img from "figma:asset/4ea0ef21bd0e357f70de3756ea31412c1d30f604.png";
import img1 from "figma:asset/3b3679400a11743203f033dd069f0b178f2e341e.png";
import img2 from "figma:asset/ae7311c284a2eb9f64e2589aad2f3be0bcc41e20.png";

export default function InstagramPost2() {
  return (
    <div className="relative size-full" data-name="Instagram post - 2" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 1080 1350\\\' preserveAspectRatio=\\\'none\\\'><g transform=\\\'matrix(-28.45 71.7 -57.36 -22.76 578 793.5)\\\'><foreignObject x=\\\'-229.91\\\' y=\\\'-229.91\\\' width=\\\'459.82\\\' height=\\\'459.82\\\'><div xmlns=\\\'http://www.w3.org/1999/xhtml\\\' style=\\\'background-image: conic-gradient(from 90deg, rgba(200, 0, 0, 1) 0%, rgba(150, 0, 0, 1) 25%, rgba(100, 0, 0, 1) 50%, rgba(75, 0, 0, 1) 62.5%, rgba(50, 0, 0, 1) 75%, rgba(25, 0, 0, 1) 87.5%, rgba(12, 0, 0, 1) 93.75%, rgba(0, 0, 0, 1) 100%); opacity:1; height: 100%; width: 100%;\\\'></div></foreignObject></g></svg>')" }}>
      <div className="absolute h-[1569px] left-[-9px] top-[-110px] w-[1098px]" data-name="Generated image 1 (5) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
      </div>
      <p className="absolute bg-center bg-clip-text bg-cover bg-no-repeat font-['ZCOOL_XiaoWei:Regular',sans-serif] h-[165px] leading-[normal] left-[138px] not-italic text-[180px] top-[217px] w-[879px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${img1}')` }}>
        PANDORIA
      </p>
      <div className="absolute h-[1121px] left-[111px] top-[299px] w-[934px]" data-name="Generated image 2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.03%] left-0 max-w-none top-[-19.01%] w-full" src={img2} />
        </div>
      </div>
    </div>
  );
}