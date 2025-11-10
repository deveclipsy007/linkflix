'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	// Posições personalizadas para cada imagem
	const positions = [
		'top-0 left-0', // Imagem 1 - centro
		'top-[-30vh] left-[5vw]', // Imagem 2
		'top-[-10vh] left-[-25vw]', // Imagem 3
		'top-0 left-[27.5vw]', // Imagem 4
		'top-[27.5vh] left-[5vw]', // Imagem 5
		'top-[27.5vh] left-[-22.5vw]', // Imagem 6
		'top-[22.5vh] left-[25vw]', // Imagem 7
	];

	const sizes = [
		'h-[25vh] w-[25vw]', // Imagem 1
		'h-[30vh] w-[35vw]', // Imagem 2
		'h-[45vh] w-[20vw]', // Imagem 3
		'h-[25vh] w-[25vw]', // Imagem 4
		'h-[25vh] w-[20vw]', // Imagem 5
		'h-[25vh] w-[30vw]', // Imagem 6
		'h-[15vh] w-[15vw]', // Imagem 7
	];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden bg-black">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];
					const position = positions[index] || 'top-0 left-0';
					const size = sizes[index] || 'h-[25vh] w-[25vw]';

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="absolute top-0 flex h-full w-full items-center justify-center"
						>
							<div className={`relative ${size} ${position}`}>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover rounded-lg"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
