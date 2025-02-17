import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      [class]="class"
    >
      <g filter="url(#filter0_bd_130_545)">
        <circle
          cx="44"
          cy="34"
          r="23"
          fill="url(#paint0_linear_130_545)"
          shape-rendering="crispEdges"
        />
        <circle
          cx="44"
          cy="34"
          r="23"
          stroke="url(#paint1_linear_130_545)"
          stroke-opacity="0.6"
          style="mix-blend-mode:overlay"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_130_545"
          x="-29.5"
          y="-39.5"
          width="147"
          height="147"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_130_545"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.196078 0 0 0 0 0.32549 0 0 0 0 0.54902 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_130_545"
            result="effect2_dropShadow_130_545"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_130_545"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_130_545"
          x1="44"
          y1="4.33333"
          x2="44"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C5CCDE" />
          <stop offset="1" stop-color="#D1DBE6" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_130_545"
          x1="44"
          y1="11"
          x2="44"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class AnswerIconComponent {
  @Input() class = '';
}
