// src/core/components/GoldenWaves.tsx

type GoldenWavesProps = {
  position?: 'top' | 'bottom'
  className?: string
}

const mainWave =
  'M-100 225C135 150 310 155 495 210C680 265 835 167 1035 160C1260 152 1420 211 1700 90'

const secondaryWave =
  'M-100 255C170 215 330 225 530 245C740 267 880 217 1085 208C1305 198 1455 232 1700 174'

const upperWave =
  'M-100 200C120 92 330 123 532 192C705 251 857 125 1067 127C1295 129 1450 171 1700 35'

export default function GoldenWaves({
  position = 'bottom',
  className = '',
}: GoldenWavesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1600 280"
        preserveAspectRatio="none"
        fill="none"
        className={`absolute inset-x-0 h-44 w-full sm:h-52 lg:h-64 ${
          position === 'top' ? 'top-0 -scale-y-100' : 'bottom-0'
        }`}
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <ellipse
          cx="800"
          cy="255"
          rx="760"
          ry="65"
          fill="var(--color-accent)"
          opacity="0.035"
        />

        {/* Ondas decorativas mais suaves */}
        <path
          d="M-100 238C160 175 270 190 445 222C675 263 825 182 1020 176C1240 169 1380 231 1700 110"
          stroke="var(--color-accent)"
          strokeWidth="0.7"
          opacity="0.14"
        />

        <path
          d="M-100 248C115 198 285 204 470 233C680 265 830 212 1015 201C1235 188 1435 226 1700 148"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          opacity="0.09"
        />

        <path
          d="M-100 215C140 135 330 160 510 210C680 257 855 154 1045 151C1270 147 1435 204 1700 74"
          stroke="var(--color-accent)"
          strokeWidth="0.65"
          opacity="0.12"
        />

        {/* Onda superior */}
        <path
          d={upperWave}
          stroke="var(--color-accent)"
          strokeWidth="0.65"
          opacity="0.18"
        />

        <path
          d={upperWave}
          stroke="var(--color-accent)"
          strokeWidth="4"
          opacity="0.035"
          style={{
            filter: 'blur(5px)',
          }}
        />

        {/* Onda principal */}
        <path
          d={mainWave}
          stroke="var(--color-accent)"
          strokeWidth="1.25"
          opacity="0.48"
        />

        <path
          d={mainWave}
          stroke="var(--color-accent)"
          strokeWidth="7"
          opacity="0.055"
          style={{
            filter: 'blur(6px)',
          }}
        />

        {/* Flare comprido percorrendo toda a onda principal */}
        <path
          d={mainWave}
          pathLength="1"
          stroke="var(--color-text-light)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0.055 0.945"
          style={{
            filter:
              'drop-shadow(0 0 4px var(--color-accent)) drop-shadow(0 0 10px var(--color-accent)) drop-shadow(0 0 20px var(--color-accent))',
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1"
            to="-1"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Onda inferior */}
        <path
          d={secondaryWave}
          stroke="var(--color-accent)"
          strokeWidth="0.9"
          opacity="0.3"
        />

        <path
          d={secondaryWave}
          stroke="var(--color-accent)"
          strokeWidth="5"
          opacity="0.04"
          style={{
            filter: 'blur(5px)',
          }}
        />

        <path
          d={secondaryWave}
          pathLength="1"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="0.04 0.96"
          style={{
            filter:
              'drop-shadow(0 0 4px var(--color-accent)) drop-shadow(0 0 10px var(--color-accent))',
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1"
            to="-1"
            dur="11s"
            begin="-3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Partícula 1 — percorre toda a onda principal */}
        <circle
          r="3"
          fill="var(--color-text-light)"
          style={{
            filter:
              'drop-shadow(0 0 4px var(--color-accent)) drop-shadow(0 0 10px var(--color-accent)) drop-shadow(0 0 18px var(--color-accent))',
          }}
        >
          <animateMotion
            path={mainWave}
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            rotate="auto"
          />

          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.08;0.9;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Partícula 2 — mesma onda com velocidade diferente */}
        <circle
          r="1.8"
          fill="var(--color-accent)"
          style={{
            filter:
              'drop-shadow(0 0 4px var(--color-accent)) drop-shadow(0 0 9px var(--color-accent))',
          }}
        >
          <animateMotion
            path={mainWave}
            dur="12s"
            begin="-6s"
            repeatCount="indefinite"
            rotate="auto"
          />

          <animate
            attributeName="opacity"
            values="0;0.85;0.85;0"
            keyTimes="0;0.08;0.9;1"
            dur="12s"
            begin="-6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Partícula 3 — percorre toda a onda inferior */}
        <circle
          r="2.4"
          fill="var(--color-text-light)"
          style={{
            filter:
              'drop-shadow(0 0 4px var(--color-accent)) drop-shadow(0 0 12px var(--color-accent))',
          }}
        >
          <animateMotion
            path={secondaryWave}
            dur="11s"
            begin="-2s"
            repeatCount="indefinite"
            rotate="auto"
          />

          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.08;0.9;1"
            dur="11s"
            begin="-2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Partícula 4 — percorre toda a onda superior */}
        <circle
          r="2"
          fill="var(--color-accent)"
          style={{
            filter:
              'drop-shadow(0 0 4px var(--color-accent)) drop-shadow(0 0 10px var(--color-accent))',
          }}
        >
          <animateMotion
            path={upperWave}
            dur="14s"
            begin="-8s"
            repeatCount="indefinite"
            rotate="auto"
          />

          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            keyTimes="0;0.08;0.9;1"
            dur="14s"
            begin="-8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Partícula 5 — segunda passagem na onda inferior */}
        <circle
          r="1.5"
          fill="var(--color-accent)"
          style={{
            filter:
              'drop-shadow(0 0 3px var(--color-accent)) drop-shadow(0 0 8px var(--color-accent))',
          }}
        >
          <animateMotion
            path={secondaryWave}
            dur="16s"
            begin="-10s"
            repeatCount="indefinite"
            rotate="auto"
          />

          <animate
            attributeName="opacity"
            values="0;0.7;0.7;0"
            keyTimes="0;0.08;0.9;1"
            dur="16s"
            begin="-10s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}