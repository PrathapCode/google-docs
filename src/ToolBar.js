import React, { useState, useEffect } from 'react';
import SharingDialog from './SharingDialog';

import FileDialog from './tools/FileDialog';
import EditDialog from './tools/EditDialog';
import ViewDialog from './tools/ViewDialog';
import InsertDialog from './tools/InsertDialog';
import FormatDialog from './tools/FormatDialog';
import ToolsDialog from './tools/ToolsDialog';
import ExtensionsDialog from './tools/ExtensionsDialog';
import HelpDialog from './tools/HelpDialog';

export default function ToolBar() {

  /// SHARE OPTION ///

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };


  ////////////

  const [documentName, setDocumentName] = useState("Untitled document"); // Initial document name state

  const handleDocumentNameChange = (event) => {
    const newName = event.target.value;
    setDocumentName(newName);
    // Save the document name in a variable or perform any other actions here
    console.log("Document name updated:", newName);
  };


  ///FUNCTION TOOL BAR ////

  const [activeDialog, setActiveDialog] = useState(null);

  const handleMenuClick = (menuOption) => {
    setActiveDialog(menuOption);
  };

  const handleCloseDialog = () => {
    setActiveDialog(null);
  };

  useEffect(() => {
    const handleClickOutsideDialog = (event) => {
      // Check if the clicked element is outside the toolbar
      if (!event.target.closest('.toolbar')) {
        handleCloseDialog();
      }
    };

    document.addEventListener('click', handleClickOutsideDialog);

    return () => {
      document.removeEventListener('click', handleClickOutsideDialog);
    };
  }, []);


  return (

    <div className='toolbar'>

      <div className='toolbar-left'>

        <img className='docs-logo' src='/google-docs-logo.png' alt='ehe'></img>

        <div className='toolbar-left-top-bottom'>

          <div className='toolbar-left-top'>

            <input
              type='text'
              value={documentName}
              onChange={handleDocumentNameChange}
              className='document-name-input'
            />

            <div className='star' ><img src='/star.png' alt='' style={{ width: "19.5px", height: "19.5px" }} ></img></div>
            <div className='folder-move' ><img alt='' src='/folder-move.png' style={{ width: "19.5px", height: "19.5px" }} ></img></div>
            <div className='document-done' ><img alt='' src='/document-done.png' style={{ width: "19.5px", height: "19.5px" }} ></img></div>

          </div>

          <div className="toolbar-left-bottom">
            <p className="menu-bar file" onClick={() => handleMenuClick('file')}>File</p>
            <p className="menu-bar edit" onClick={() => handleMenuClick('edit')}>Edit</p>
            <p className="menu-bar view" onClick={() => handleMenuClick('view')}>View</p>
            <p className="menu-bar insert" onClick={() => handleMenuClick('insert')}>Insert</p>
            <p className="menu-bar format" onClick={() => handleMenuClick('format')}>Format</p>
            <p className="menu-bar tools" onClick={() => handleMenuClick('tools')}>Tools</p>
            <p className="menu-bar extensions" onClick={() => handleMenuClick('extensions')}>Extensions</p>
            <p className="menu-bar help" onClick={() => handleMenuClick('help')}>Help</p>
          </div>

          {activeDialog === 'file' && <FileDialog onClose={handleCloseDialog} />}
          {activeDialog === 'edit' && <EditDialog onClose={handleCloseDialog} />}
          {activeDialog === 'view' && <ViewDialog onClose={handleCloseDialog} />}
          {activeDialog === 'insert' && <InsertDialog onClose={handleCloseDialog} />}
          {activeDialog === 'format' && <FormatDialog onClose={handleCloseDialog} />}
          {activeDialog === 'tools' && <ToolsDialog onClose={handleCloseDialog} />}
          {activeDialog === 'extensions' && <ExtensionsDialog onClose={handleCloseDialog} />}
          {activeDialog === 'help' && <HelpDialog onClose={handleCloseDialog} />}


        </div>

      </div>


      <div className='toolbar-right'>

        <div className='time' >
          <img style={{ width: "23px", height: "23px" }} src='/time.png' alt='img'></img>
        </div>

        <div className='comment' >
          <img style={{ width: "23px", height: "23px" }} src='/comment.png' alt='img'></img>
        </div>

        <div className='join-call'  >
          <img className='videocam' style={{ width: "23px", height: "23px" }} src='/videocam.png' alt='img'></img>
          <img className='drop-down' style={{ width: "20px", height: "20px" }} src='/drop_down.png' alt='img'></img>
        </div>

        <div onClick={handleClick} className='share-div' >

          <img className='lock' style={{ width: "18px", height: "18px" }} src='/lock.png' alt=''></img>
          <p>Share</p>

          {/* show component on click */}
          {isShown && <SharingDialog />}

        </div>

        <div className='profile'> <img src='/profile.png' style={{ width: "31px", height: "31px" }} alt='img'></img></div>

        {/* <button onClick={handleSharingClick}>Share</button> */}

      </div>

      {/* <SharingDialog isOpen={isSharingOpen} onClose={handleSharingDialogClose} /> */}

    </div>

  )
}




