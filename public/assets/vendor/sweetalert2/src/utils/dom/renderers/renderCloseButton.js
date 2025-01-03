import * as dom from 'public/assets/vendor/sweetalert2/src/utils/dom/index'

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
export const renderCloseButton = (instance, params) => {
  const closeButton = dom.getCloseButton()
  if (!closeButton) {
    return
  }

  dom.setInnerHtml(closeButton, params.closeButtonHtml || '')

  // Custom class
  dom.applyCustomClass(closeButton, params, 'closeButton')

  dom.toggle(closeButton, params.showCloseButton)
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '')
}
