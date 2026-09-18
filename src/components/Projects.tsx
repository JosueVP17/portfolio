"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type LightboxImage = { src: string; alt: string; w: number; h: number };

function Img({
  src,
  alt,
  width,
  height,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
}) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className + (onClick ? " cursor-pointer" : "")}
      onError={() => setErr(true)}
      onClick={onClick}
      loading="lazy"
    />
  );
}

function Lightbox({ image, onClose }: { image: LightboxImage; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-10 text-muted hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <img
        src={image.src}
        alt={image.alt}
        width={image.w}
        height={image.h}
        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

const projects = [
  {
    title: "SentinelCV",
    tags: ["YOLOv8", "FastAPI", "React", "Docker", "CUDA"],
    description:
      "1st Place — Hola Mundo 2026 National Innovation Competition. Production-ready AI video analytics platform supporting 12 concurrent streams with 872ms E2E latency. Multi-model pipeline: YOLOv8 object detection, pose estimation (fall detection), and custom fine-tuned weapon detector (0.770 mAP@50). Curated 14K-image weapon dataset.",
    highlight: "1st Place — Hola Mundo 2026",
    metrics: ["12 streams", "872ms latency", "0.770 mAP@50"],
    media: { type: "img", src: "/sentinelcv.png", alt: "SentinelCV architecture diagram", w: 1847, h: 915 },
    gh: "sentinelcv",
  },
  {
    title: "Deepfake Detection with ViT",
    tags: ["PyTorch", "timm", "ViT-B/16", "OpenCV"],
    description:
      "Fine-tuned Vision Transformer on FaceForensics++ (7K videos, 6 manipulations). Achieved 0.972 test AUC, competitive with Xception (0.978), outperforming EfficientNet-B4 (0.967). Demonstrated superior robustness under heavy blur (AUC 0.873 @ K=7 vs 0.821 / 0.781) and stable JPEG performance. Cross-dataset eval on Celeb-DF v2.",
    highlight: "0.972 AUC",
    metrics: ["0.996 AUC on DeepFakeDetection", "7.72ms inference", "43.5M params"],
    gallery: [
      { src: "/projects/deepfake-detection-vit/roc-curves.png", alt: "ROC curves comparing ViT, Xception, and EfficientNet", label: "ROC Curves", w: 790, h: 590 },
      { src: "/projects/deepfake-detection-vit/auc-heatmap.png", alt: "AUC heatmap per manipulation method", label: "AUC per Method", w: 901, h: 290 },
      { src: "/projects/deepfake-detection-vit/robustness.png", alt: "Robustness under JPEG compression and blur", label: "Robustness", w: 2100, h: 750 },
    ],
    gh: "deepfake-detection-vit",
  },
  {
    title: "Surgical Nursing RAG",
    tags: ["LangChain", "Ollama", "ChromaDB", "Python"],
    description:
      "Fully local RAG system indexing 1,557 pages of medical literature into 8,210 embeddings. ChromaDB vector search with semantic chunking achieves &lt;250ms retrieval latency and L2 distance of 0.45. Offline quantized LLM inference eliminates cloud API costs entirely.",
    highlight: "Local RAG &lt;250ms",
    metrics: ["8,210 embeddings", "250ms retrieval", "100% offline"],
    code: `$ python ask.py "What precautions for mobilizing a patient with drains and catheters?"

Based on the surgical nursing reference:
• Secure all drains and catheters before moving
• Keep drainage bags below insertion site
• Avoid tension on tubing during transfer
• Monitor for pain, leakage, or dislodgement`,
    gh: "surgical-nursing-rag",
  },
  {
    title: "GeoTIF Semantic Segmentation",
    tags: ["TensorFlow", "Keras", "Encoder-Decoder", "Rasterio"],
    description:
      "Semantic segmentation of aerial imagery (Potsdam dataset, 5cm/px) using a CNN and an encoder–decoder architecture with skip connections. The encoder–decoder significantly outperformed the baseline CNN (77.2% vs 63.4% test accuracy) across 6 land-cover classes.",
    highlight: "77.2% accuracy",
    metrics: ["5cm resolution", "6 classes", "Encoder-Decoder + skip"],
    gallery: [
      { src: "/projects/geotif-semantic-segmentation/rgb.png", alt: "RGB aerial image", label: "RGB", w: 481, h: 504 },
      { src: "/projects/geotif-semantic-segmentation/elevation.png", alt: "Elevation band", label: "Elevation", w: 474, h: 490 },
      { src: "/projects/geotif-semantic-segmentation/ground-truth.png", alt: "Ground truth segmentation", label: "Ground Truth", w: 697, h: 504 },
      { src: "/projects/geotif-semantic-segmentation/prediction.png", alt: "Model prediction", label: "Prediction", w: 697, h: 504 },
    ],
    gh: "geotif-semantic-segmentation",
  },
  {
    title: "Neural Style Transfer",
    tags: ["PyTorch", "VGG16", "L-BFGS"],
    description:
      "Implementation of Gatys et al. (2015) with three extras: progress GIF saving, two-style blending with controllable weight, and color preservation mode. Supports non-square outputs with aspect-ratio preservation and a full CLI interface.",
    highlight: "Gatys et al. 2015",
    metrics: ["Style blending", "Color preservation", "Progress GIFs"],
    gallery: [
      { src: "/projects/neural-style-transfer/content-gothenburg.jpg", alt: "Content image — Gothenburg", label: "Content", w: 1600, h: 900 },
      { src: "/projects/neural-style-transfer/style-wave.webp", alt: "Style image — The Great Wave", label: "Style", w: 1290, h: 867 },
      { src: "/projects/neural-style-transfer/result-gothenburg-wave.png", alt: "Result — Gothenburg × Great Wave", label: "Result", w: 455, h: 256 },
    ],
    gh: "neural-style-transfer",
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-6">
          Featured Projects
        </h2>
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group border border-border rounded-xl p-5 hover:border-foreground-muted transition-colors"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className="text-sm font-medium text-foreground">{project.title}</h3>
                <span className="shrink-0 text-xs font-medium text-purple-400 bg-accent/15 px-2 py-0.5 rounded-full">
                  {project.highlight}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {project.media?.type === "img" && (() => {
                const m = project.media;
                return (
                  <div className="mt-3 rounded-lg border border-border bg-surface overflow-hidden">
                    <Img
                      src={m.src}
                      alt={m.alt}
                      width={m.w}
                      height={m.h}
                      className="w-full object-contain max-h-96"
                      onClick={() => setLightbox({ src: m.src, alt: m.alt, w: m.w, h: m.h })}
                    />
                  </div>
                );
              })()}

              {project.gallery && (
                <div className={`mt-3 grid gap-2 ${project.gallery.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
                  {project.gallery.map((img) => (
                    <div
                      key={img.label}
                      className="rounded-lg border border-border bg-surface overflow-hidden cursor-pointer"
                      onClick={() => setLightbox(img)}
                    >
                      <Img src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full aspect-[4/3] object-cover" />
                      <div className="text-center text-xs text-muted-dim py-1 border-t border-border">
                        {img.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {project.code && (
                <div className="mt-3 rounded-lg border border-border bg-bg overflow-hidden">
                  <pre className="text-xs text-muted p-4 overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap">{project.code}</pre>
                </div>
              )}

              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-surface text-muted-dim border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.metrics?.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2 py-0.5 rounded-md bg-surface/50 text-muted-dim border border-border/50"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://github.com/JosueVP17/${project.gh}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-muted text-xs font-medium transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                  Repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox && <Lightbox image={lightbox} onClose={closeLightbox} />}
    </section>
  );
}
