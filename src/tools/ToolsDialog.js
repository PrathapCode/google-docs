import React from 'react'
import "./ToolsDialog.css"

export default function FormatDialog() {
  return (
    <div className='dialog tools-dialog'>

      <div className='bold flex one'>
        <div className='bold-left flex'>
          <img src='/bold.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Text</p>
        </div>

        <div className='bold-right'>
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='paragraph flex two'>
        <div className='paragraph-left flex'>
          <img src='/paragraph-styles.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Paragraph styles</p>
        </div>

        <div className='paragraph-right'>
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='alignment flex three'>
        <div className='alignment-left flex'>
          <img src='/alignment.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Align & indent</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='line flex four'>
        <div className='line-left flex'>
          <img src='/line.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Line & paragraph spacing</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='columns flex five'>
        <div className='columns-left flex'>
          <img src='/columns.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Columns</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='bullets flex six'>
        <div className='bullets-left flex'>
          <img src='/bullets.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Bullets & numbering</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='headers flex seven'>
        <div className='headers-left flex'>
          <img src='/header-footer.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Headers & footers</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='hash flex eight'>
        <div className='hash-left flex'>
          <img src='/hash.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Page numbers</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

      <div className='page flex nine'>
        <div className='page-left flex'>
          <img src='/orientation.png' style={{ width: "18px", height: "18px" }} ></img>
          <p>Page orientation</p>
        </div>

        <div >
          <img src='/right-arrow' style={{ width: "13px", height: "13px" }} ></img>
        </div>
      </div>

    </div>
  )
}
