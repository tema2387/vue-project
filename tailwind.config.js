/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    backgroundPosition: {
      'center-top': 'center top'
    },
    fontFamily: {
      // Default
      'sans': ['Inter', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1140px',
    },
    container: {
      center: true,
    },
    fontSize: {
      // Default
      '12': ['12px', {
        lineHeight: '14px',
        fontWeight: '400',
      }],
      '13': ['13px', {
        lineHeight: '20px',
        fontWeight: '400',
      }],
      '13-500': ['13px', {
        lineHeight: '20px',
        fontWeight: '500',
      }],
      '15': ['15px', {
        lineHeight: '22px',
        fontWeight: '400',
      }],
      '15-500': ['15px', {
        lineHeight: '22px',
        fontWeight: '500',
      }],
      'caption': ['13px', {
        lineHeight: '22px',
        fontWeight: '400',
      }],
      'oveline': ['12px', {
        lineHeight: '14px',
        fontWeight: '400',
      }],
      // Components
      'input-label': ['13px', {
        lineHeight: '15px',
        fontWeight: '400',
      }],
      'helper-text': ['13px', {
        lineHeight: '13px',
        fontWeight: '400',
      }],
      'input-text-lg': ['17px', {
        lineHeight: '28px',
        fontWeight: '400',
      }],
      'input-text': ['15px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],
      'input-text-sm': ['13px', {
        lineHeight: '22px',
        fontWeight: '400',
      }],
      'avatar-initials': ['15px', {
        lineHeight: '18px',
        fontWeight: '400',
      }],
      'chip': ['13px', {
        lineHeight: '20px',
        fontWeight: '400',
      }],
      'toast': ['15px', {
        lineHeight: '22px',
        fontWeight: '400',
      }],
      'button-lg': ['17px', {
        lineHeight: '26px',
        fontWeight: '500',
      }],
      'button-md': ['15px', {
        lineHeight: '22px',
        fontWeight: '500',
      }],
      'button-sm': ['13px', {
        lineHeight: '18px',
        fontWeight: '500',
      }],
      'tooltip': ['13px', {
        lineHeight: '20px',
        fontWeight: '500',
      }],
      'alert-text': ['15px', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      'table-header': ['12px', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      'badge-lable': ['13px', {
        lineHeight: '20px',
        fontWeight: '500',
      }],
      // Other
      'logo': ['20px', {
        lineHeight: '24px',
        fontWeight: '600',
      }],
      'subtitle-bold': ['24px', {
        lineHeight: '32px',
        fontWeight: '700',
      }],
      'price-bold': ['48px', {
        lineHeight: '56px',
        fontWeight: '700',
      }],
      'count-bold': ['34px', {
        lineHeight: '42px',
        fontWeight: '700',
      }],
      'title-ready-bold': ['32px', {
        lineHeight: '42px',
        fontWeight: '700',
      }],
      'error-number': ['96px', {
        lineHeight: '96px',
        fontWeight: '500',
      }]
    },
    extend: {
      boxShadow: {
        'sm': '0 2px 3px 0 rgba(0, 0, 0, 30%)',
        'md': '0 4px 16px 0 rgba(0, 0, 0, 45%)',
        'lg': '0 6px 20px 0 rgba(0, 0, 0, 40%)',
      },
      backgroundImage: {
        'gray-linear': 'linear-gradient(90deg, rgba(0,0,0,0) 0%, var(--secondary-100) 100%, rgba(0,0,0,0) 100%)',
      },
      keyframes: {
        line: {
          '0%': {
            backgroundPosition: '-100% 100%',
          },
          '100%': { 
            backgroundPosition: '200% 100%',
          },
        }
      },
      animation: {
        line: 'line 2s ease-in-out infinite',
      },
      colors: {
        // Purple
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-opacity': 'rgba(var(--primary-opacity), <alpha-value>)',
        // Gray
        'secondary-100': 'var(--secondary-100)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-300': 'var(--secondary-300)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-500': 'var(--secondary-500)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-700': 'var(--secondary-700)',
        'secondary-800': 'var(--secondary-800)',
        'secondary-900': 'var(--secondary-900)',
        'secondary-opacity': 'rgba(var(--secondary-opacity), <alpha-value>)',
        // Blue
        'info-100': 'var(--info-100)',
        'info-200': 'var(--info-200)',
        'info-300': 'var(--info-300)',
        'info-400': 'var(--info-400)',
        'info-500': 'var(--info-500)',
        'info-600': 'var(--info-600)',
        'info-700': 'var(--info-700)',
        'info-800': 'var(--info-800)',
        'info-900': 'var(--info-900)',
        'info-opacity': 'rgba(var(--info-opacity), <alpha-value>)',
        // Green
        'success-100': 'var(--success-100)',
        'success-200': 'var(--success-200)',
        'success-300': 'var(--success-300)',
        'success-400': 'var(--success-400)',
        'success-500': 'var(--success-500)',
        'success-600': 'var(--success-600)',
        'success-700': 'var(--success-700)',
        'success-800': 'var(--success-800)',
        'success-900': 'var(--success-900)',
        'success-opacity': 'rgba(var(--success-opacity), <alpha-value>)',
        // Yellow
        'warning-100': 'var(--warning-100)',
        'warning-200': 'var(--warning-200)',
        'warning-300': 'var(--warning-300)',
        'warning-400': 'var(--warning-400)',
        'warning-500': 'var(--warning-500)',
        'warning-600': 'var(--warning-600)',
        'warning-700': 'var(--warning-700)',
        'warning-800': 'var(--warning-800)',
        'warning-900': 'var(--warning-900)',
        'warning-opacity': 'rgba(var(--warning-opacity), <alpha-value>)',
        // Red
        'error-100': 'var(--error-100)',
        'error-200': 'var(--error-200)',
        'error-300': 'var(--error-300)',
        'error-400': 'var(--error-400)',
        'error-500': 'var(--error-500)',
        'error-600': 'var(--error-600)',
        'error-700': 'var(--error-700)',
        'error-800': 'var(--error-800)',
        'error-900': 'var(--error-900)',
        'error-opacity': 'rgba(var(--error-opacity), <alpha-value>)',
        // Black
        'action-focus': 'var(--action-focus)',
        'main-0-2': 'var(--main-0-2)',
        'action-disabled': 'var(--action-disabled)',
        'text-disabled': 'var(--text-disabled)',
        'main-0-5': 'var(--main-0-5)',
        'action-active': 'var(--action-active)',
        'text-secondary': 'var(--text-secondary)',
        'main-0-8': 'var(--main-0-8)',
        'text-primary': 'var(--text-primary)',
        // Extra
        'main-color': 'var(--main-color)',
        'action-hover': 'var(--action-hover)',
        'action-selected': 'var(--action-selected)',
        'devider': 'var(--devider)',
        'outline-border': 'var(--outline-border)',
        'input-border': 'var(--input-border)',
        'backdrop-overlay': 'var(--backdrop-overlay)',
        // Gray Opacity
        'gray-opacity': 'rgba(var(--gray-opacity), <alpha-value>)',
        // Custom Color
        'snackbar': 'var(--snackbar)',
        'body-bg': 'var(--body-bg)',
        'paper-bg': 'rgba(var(--paper-bg), <alpha-value>)',
        'table': 'var(--table)',
        'chat-bg': 'var(--chat-bg)',
        'track-bg': 'var(--track-bg)',
        'grey-light': 'var(--grey-light)',
        // Others
        'footer-bg-color': 'var(--footer-bg-color)',
        'color-facebook-icon': 'var(--color-facebook-icon)',
        'color-twitter-icon': 'var(--color-twitter-icon)',
        'color-linkedin-icon': 'var(--color-linkedin-icon)',
        'bg-white': 'var(--bg-white)'
      },
    },
  },
  plugins: [],
}

