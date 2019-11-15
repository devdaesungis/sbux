(function (){
	SBUxG.SVR.LICENSE = 'SUE26-2001-19641-107';

	SBUxG.DEF.SET_LOACLE_KEY = 'SBUxG.LOC.MSG';

	//****************************
	// Setup Base Config
	//****************************
	SBUxG.DEF.SET_DETECT_SET = {
		// detection of SQL meta-characters
		// or 1=1--'
		regExpSqlMeta : /((\%3D)|(=))[^\n]*((\%27)|(\')|(\-\-)|(\%3B)|(;))/i,
		// typical SQL Injection Attack
		// \w* - zero or more alphanumeric or underscore characters
        // (\%27)|\' - the ubiquitous single-quote or its hex equivalent
		// (\%6F)|o|(\%4F))((\%72)|r|(\%52)
		   // - the word 'or' with various combinations of its upper and lower case hex equivalents.
		regExpSqlInjection : /\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))/i,
		// SQL Queries
		regExpSqlQueries : /(union|select|insert|update|delete|drop|where)/i,
		// System command
		regExpSystemCommand : /(exec|xp_cmdshell)/i,
		// Cross Site Scripting Attack
		// ((\%3C)|<) - check for opening angle bracket or hex equivalent
        // ((\%2F)|\/)* - the forward slash for a closing tag or its hex equivalent
        // [a-z0-9\%]+ - check for alphanumeric string inside the tag, or hex representation of these
        // ((\%3E)|>) - check for closing angle bracket or hex equivalent
		regExpXSS : /((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/i,
		message :'[Detecting] SQL Injdection 및 XSS 에 해당하는 값은 사용할 수 없습니다.',
		// view time
		messageDelay : 1000
	};


	SBUxG.DEF.SET_PERMIT_KEYCODES_SET = {
		kr : [], // not num and not eng
		num : [48,49,50,51,52,53,54,55,56,57], // 0 ~ 9
		en : [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122], // A~Z , a~z
		custom : [],
		customnot : []
	};

	SBUxG.DEF.SET_PERMIT_CELL_NUMBER = {
		regExpNum :  /(^02|^031|^032|^033|^041|^042|^043|^044|^051|^052|^053|^054|^055|^061|^062|^063|^064|^070|^010|^011|^016|^017|^018|^019|^0130|^0502|^0504|^0505|^0506|^050)([0-9]+)([0-9]{4})/,
		regExpRep : '$1-$2-$3'
	};

	SBUxG.DEF.SET_POPUPLAYER = {
		zIndex : 100
	};

	SBUxG.DEF.SET_COMMON = {
		storageData       : 'value'
	};

	SBUxG.DEF.SET_TOOLTIP = {
		// 'top','bottom','left','right'
		placement         : 'top',
		// 'click' , 'hover' , 'focus', 'hover focus','hover click'
		trigger           : 'hover'	,
		html              : false
	};

	SBUxG.DEF.SET_POPOVER = {
		title             : undefined,
		// 'top','bottom','left','right'
		placement         : 'top',
		// 'click' , 'hover' , 'focus', 'hover focus','hover click'
		trigger           : 'hover',
		html              : false
	};

	SBUxG.DEF.SET_INPUT = {
		storageData       : 'value',
		maskCurrencyUnit  : '$ ' // '￦'
	};

	SBUxG.DEF.SET_DATEPICKER = {
		showWeeks         : false,
		startingDay       : 1,
		// formatDayTitle    : SBUxG.DEF.MSG.DATEPICKER_DAY_TITLE,
		// formatMonthTitle  : SBUxG.DEF.MSG.DATEPICKER_MONTH_TITLE,
		yearRange         : 10,
		// dateFormat        : SBUxG.DEF.MSG.DATEPICKER_FORMAT,
		// monthFormat       : SBUxG.DEF.MSG.DATEPICKER_MONTH_FORMAT,
		// yearFormat        : SBUxG.DEF.MSG.DATEPICKER_YEAR_FORMAT,
		// unmaskDateFormat  : SBUxG.DEF.MSG.DATEPICKER_UNMASK_FORMAT,
		// unmaskMonthFormat  : SBUxG.DEF.MSG.DATEPICKER_UNMASK_MONTH_FORMAT,
		// unmaskYearFormat  : SBUxG.DEF.MSG.DATEPICKER_UNMASK_YEAR_FORMAT,
		// add popup mode
		showButtonBar     : true,
		// currentText       : SBUxG.DEF.MSG.DATEPICKER_CURRENT_TEXT,
		// currentTextMonth  : SBUxG.DEF.MSG.DATEPICKER_CURRENT_MONTH_TEXT,
		// currentTextYear   : SBUxG.DEF.MSG.DATEPICKER_CURRENT_YEAR_TEXT,
		// clearText         : SBUxG.DEF.MSG.DATEPICKER_CLEAR_TEXT,
		// closeText         : SBUxG.DEF.MSG.DATEPICKER_CLOSE_TEXT,
		showPeriodBar     : false,
		periodSet         : '3D,5D,1W,2M,6M,1Y',

		closeOnDateSelection : true,
		placement         : 'bottomLeft',
		// inputMask         : SBUxG.DEF.MSG.DATEPICKER_INPUTMASK
		doubleOpen         : false
	};

	SBUxG.DEF.SET_RADIO = {
		textRightPadding  : '0px',
		textLeftPadding   : '0px',

		jsondataText      : 'text',
		jsondataValue     : 'value',
		direction         : 'horizontal',

		storageData       : 'value'
	};

	SBUxG.DEF.SET_CHECKBOX = {
		textRightPadding  : '0px',
		textLeftPadding   : '0px',

		jsondataText      : 'text',
		jsondataTrueValue : 'truevalue',
		jsondataFalseValue: 'falsevalue',
		direction         : 'horizontal',

		storageData       : 'value'
	};

	SBUxG.DEF.SET_LABEL = {
		storageData       : 'text'
	};

	SBUxG.DEF.SET_SELECT = {

		isSelectAllOption : false,
		isSelectAllText   : SBUxG.DEF.MSG.IS_SELECT_ALL_TEXT,
		titleSelectMaxCount : 3,
		titleSelectMaxText : SBUxG.DEF.MSG.TITLE_SELECT_MAX_TEXT,
		titleSelectAllText : SBUxG.DEF.MSG.TITLE_SELECT_ALL_TEXT,

		isListOnly        : false, // such as listbox
		direction         : 'down',

		jsondataText      : 'text',
		jsondataValue     : 'value',
		unselectedText    : undefined,// SBUxG.DEF.MSG.SELECT_UNSELECTED,
		autoUnselectedText : false,
		autoTrim : false,
		autoTrimText : false,
		autoTrimValue : false,
		emptyValueType    : null, // null , undefined
		notFoundText      : SBUxG.DEF.MSG.NOT_FOUND_TEXT,
		noDataText        : SBUxG.DEF.MSG.SELECT_NO_DATA,

		showDownIcon : true,

		storageData       : 'value'
	};

	SBUxG.DEF.SET_BUTTON = {
		buttonColor       : 'default',
		buttonSize        : 'middle' , //small, big , middle
		autoComplete      : 'off',
		placement         : 'front',
		hoverIsFade       : false,
		isChangeText      : false,
		storageData       : 'value'
	};

	SBUxG.DEF.SET_TEXTAREA = {
		autoTrim          : false,
		isContentHtml     : false,
		rows              : 3,
		cols              : 50,
		storageData       : 'value'
	};

	SBUxG.DEF.SET_LISTBOX = {
		jsondataText      : 'text',
		jsondataValue     : 'value',
		notFoundText      : SBUxG.DEF.MSG.NOT_FOUND_TEXT,
		storageData       : 'value'
	};

	SBUxG.DEF.SET_DROPDOWN = {
		text              : SBUxG.DEF.MSG.DROPDOWN_TEXT,
		direction         : 'down',
		changeText        : false ,
		buttonColor       : 'default',

		jsondataText      : 'text',
		jsondataValue     : 'value',
		jsondataLink      : 'link',
		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',

		verticalScrollPlacement : 'right',
		verticalScrollColor : '#000',
		verticalScrollSize : '7px',

		storageData       : 'value'
	};

	SBUxG.DEF.SET_ALERT    = {
		baseMode          : 'info',   // info, light
		placement         : 'top-right',   // top-left, top-right
		isFixed           : false,
		isModal           : false,
		closeKeyenter     : false,
		storageData       : 'value',
		showCloseButton   : true,
		showOnlyOne       : false,
		showWindowScroll  : true
	};

	SBUxG.DEF.SET_MODAL    = {
		isFade            : true,
		headerCloseText   : '&times;',
		footerIsCloseButton   : true   ,
		footerButtonPlacement : 'right',
		showWindowScroll : true,

		footerCloseText   : SBUxG.DEF.MSG.CLOSE_TEXT,
		storageData       : 'value'
	};

	SBUxG.DEF.SET_TABS     = {
		highlightColor : '#ff7f4d',
		placement     : 'top',   // top, bottom, left, inbox
		//tabsPlacement     : 'top',   // top, bottom, left, inbox

		// isAddable         : false,  // tab add posible
		// isClosable        : false, // tab remove posible

		isScrollable      : true,
		isDraggable       : false, // tab drag posible
		isDraggableOpenwin   : false, // tab drag and open win
		isDraggableOpenlayer : false, // tab drag and open win
		isDraggableOpenTabRemove : false, // after open tab , remove tab

		inBoxColor        : 'blue',  // if you add or change, neeed to css

		showControlPanel : false, // control pannel
		closeOthersRemainAlert : false, // if close last tab , alert

		showTooltip : false, // tooltip

		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',

		jsondataText      : 'text',
		jsondataTargetId  : 'targetid',
		jsondataTargetValue : 'value',

		jsondataGlyphs    : 'glyphs',

		jsondataBadgeText : 'badgetext',
		jsondataBadgeColor: 'badgecolor',
		jsondataCssStyle  : 'cssstyle',

		jsondataTargetName  : 'targetname',
		jsondataTargetLink  : 'link',
		jsondataCloseIcon  : 'closeicon',

		jsondataTabIndex : 'tabindex',
		jsondataContentLink : 'contentlink',

		storageData       : 'value'
	};

	SBUxG.DEF.SET_ACCORDION     = {
		glyphPlacement    : 'left',
		expandedGlyphs    : 'glyphicon-triangle-bottom',
		collapseGlyphs    : 'glyphicon-triangle-right',

		isExpandOnlySelect: false,

		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',

		jsondataText      : 'text',
		jsondataTargetId  : 'targetid',
		jsondataTargetValue : 'targetvalue',

		jsondataGlyphsPlacement : 'placement',

		jsondataExpandedGlyphs  : 'expglyphs',
		jsondataCollapseGlyphs  : 'colglyphs',

		jsondataCssStyle  : 'cssstyle',

		jsondataTargetName  : 'targetname',
		jsondataTargetLink  : 'link',

		jsondataTabIndex : 'tabindex',

		storageData       : 'value'

	};

	SBUxG.DEF.SET_MENU     = {
		placement     : 'top',   // top, bottom
		isFixed       : true,
		isInverse     : false,
		// menuPlacement     : 'top',   // top, bottom
		// menuIsFixed       : true,
		// menuIsInverse     : false,
		trigger : 'click',
		showAllMenu : false,
		showSubAllMenu : false,

		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',
		jsondataText      : 'text',
		jsondataValue     : 'value',
		jsondataLink      : 'link',

		jsondataTargetName  : 'targetname',
		jsondataTarget     : 'target',
		jsondataImageSrc  : 'imagesrc',
		jsondataImageStyle: 'imagestyle',
		jsondataImageAlt : 'imagealt',
		jsondataImageTitle : 'imagetitle',
		jsondataImagePosition : 'imagepos',
		jsondataCssStyle  : 'cssstyle',
		jsondataCssClass  : 'cssclass',
		jsondataShortcutId : 'shortcutid',

		storageData       : 'text'
	};

	SBUxG.DEF.SET_SLIDER = {
		direction         : 'horizontal',
		minValue          : 0,
		maxValue          : 100,

		showValue       : true,


		storageData       : 'value'
	};

	SBUxG.DEF.SET_PROGRESS = {
		valuenow : 0,
		valuemin  : 0,
		valuemax : 100,
		label : '',
		unit : '',
		indicatorType : 'normal',
		timeLimit : 30,
		striped : false,
		showOpenlayer : false,
		showMotion : false,
		isFixed : false,
		isModal : true,
		storageData       : 'value'
	};

	SBUxG.DEF.SET_RATING = {
		setValue : 0,
		readonly : false,
		reverse : false,
		ratingValueArray : ['1','2','3','4','5'],
		showAllValues : false,
		showCurrentValue : false,
		valuePosition : 'right'
	};


	SBUxG.DEF.SET_TREE = {
		PATH_DELIMITER    : '/',
		isExpand          : false,
		isExpandOnlySelect : false,
		reselectDeselect  : true,
		expandType        : 'all',
		showParentCheckbox  : false,
		saveStatusType : 'all',
		showDeleteConfirm : true,
		trigger           : 'click',
		triggerIcon       : 'click',
		triggerItem       : 'click',
		emptyMessage      : SBUxG.DEF.MSG.TREE_NO_DATA,
		jsondataText      : 'text',
		jsondataValue     : 'value',
		jsondataLink      : 'link',
		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',
		jsondataTargetName  : 'targetname',
		jsondataTarget    : 'target',
		jsondataImageSrc  : 'imagesrc',
		jsondataImageStyle: 'imagestyle',
		jsondataImageTitle: 'imagetitle',
		jsondataImageAlt  : 'imagealt',
		jsondataCssStyle  : 'cssstyle',
		jsondataOpenLevel : 'openlevel',
		showRootVline   : false,
		showTooltipAction : 'hover',

		scrollHeightPerNode : 22,

		storageData       : 'text'
	};

	SBUxG.DEF.SET_CAROUSEL = {
		isController	  : true,
		isIndicator	  	  : false,
		autoStream		  : 'none',
		autoStreamInterval: 5000,
		slideEffect		  : 'hslide',
		circulation		  : false,
		puase			  : 'none',
		isPauseButton     : false,
		style			  : 'width : 600px; height : 300px;',
		jsondataOrder     : 'order',
		jsondataImageSrc  :	'imagesrc',
		jsondataImageAlt  :	'imagealt',
		jsondataImageTitle:	'imagetitle',
		jsondataLink	  : 'link',
		notFoundText      : SBUxG.DEF.MSG.CAROUSEL_NOT_FOUND,
		mouseWheelMove    : false,
		contentIdArray    : '',
		isControlbox	  : false,
		controlboxDirection: 'bottom',
		lazyloading       : false
	};

	SBUxG.DEF.SET_SIDEMENU = {
		PATH_DELIMITER    : '/',
		placement         : 'left',   // left, right
		showSlideButton   : false,
		isExpand          : false,
		isExpandOnlySelect: false,
		expandType        : 'all',
		emptyMessage      : SBUxG.DEF.MSG.SIDEMENU_NO_DATA,

		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',
		jsondataText      : 'text',
		jsondataValue     : 'value',
		jsondataLink      : 'link',

		jsondataTargetName : 'targetname',
		jsondataTarget     : 'target',
		jsondataImageSrc  : 'imagesrc',
		jsondataImageStyle: 'imagestyle',
		jsondataImageAlt : 'imagealt',
		jsondataImageTitle : 'imagetitle',
		jsondataImagePosition : 'imagepos',
		jsondataCssStyle  : 'cssstyle',
		jsondataCssClass  : 'cssclass',
		jsondataShortcutId : 'shortcutid',

		verticalScrollPlacement : 'right',
		verticalScrollColor : '#000',
		verticalScrollSize : '7px',

		showFilterBox : false,
		filterStartsWith : false,
		filterBoxPlaceholder : SBUxG.DEF.MSG.SIDEMENU_FILTER_PLACEHOLDER,

		isCloseIcon: false,
		isDraggable: false,
		highlightColor: '#ff7f4d',
		highlightWidth: '3px',
		highlightzIndex : '999',

		storageData       : 'text'
	};

	SBUxG.DEF.SET_FILEUPLOAD = {
		initUrl : undefined,
		uploadUrl : undefined,
		downloadUrl : undefined,

		dataType: 'json',

		acceptFileTypes: 'txt|zip|jar|docx?|xls?x|pdf|gif|jpe?g|png|pptx?',
		maxFileSize: 10000000, // 10MB

		uploadButtonText: 'Upload...^Sending...^Sucess...^Failed',

		verticalScrollPlacement : 'right',
		verticalScrollColor : '#000',
		verticalScrollSize : '7px',

		headerTitle : SBUxG.DEF.MSG.HEADER_TITLE,
		headerFileName : SBUxG.DEF.MSG.HEADER_FILENAME,
		buttonAddTitle : SBUxG.DEF.MSG.ADD_FILE,
		buttonCancelTitle : SBUxG.DEF.MSG.CANCEL_FILE,
		buttonUploadTitle : SBUxG.DEF.MSG.UPLOAD_ALL_FILE,
		buttonDeleteTitle : SBUxG.DEF.MSG.DELETE_FILE,

		acceptFileTypesMessage : 'File type not allowed',
		maxFileSizeMessage : 'File is too large',
		uploadFailMessage : 'Upload failed',

		jsondataName : 'name',
		jsondataSize : 'size',
		jsondataExt  : 'ext',

		storageData       : 'value',

		statusInit : 'init',
		statusAdd : 'add',
		statusDelete : 'delete',
		isMulti : false,
		multiDelimiter : ',',

		autoUpload: false
	};

	SBUxG.DEF.SET_GALLERY = {
		jsondataTitle     : 'title',
		jsondataThumbnail : 'thumbnail',
		jsondataUrl       : 'url',

		width             : '100px',
		height            : '100px',

		previousText      : 'Previous',
		nextText          : 'Next',

		storageData       : 'value'
	};

	SBUxG.DEF.SET_EDITOR = {
		width             : '470px',
		height            : '320px',

		buttonParagraph : SBUxG.DEF.MSG.EDITOR_BUTTON_PARAGRAPH,
		buttonBold      : SBUxG.DEF.MSG.EDITOR_BUTTON_BOLD,
		buttonUnderline : SBUxG.DEF.MSG.EDITOR_BUTTON_UNDERLINE,
		buttonItalic    : SBUxG.DEF.MSG.EDITOR_BUTTON_ITALIC,
		buttonStroke    : SBUxG.DEF.MSG.EDITOR_BUTTON_STROKE,
		buttonBulletList : SBUxG.DEF.MSG.EDITOR_BUTTON_BULLET_LIST,
		buttonNumList   : SBUxG.DEF.MSG.EDITOR_BUTTON_NUM_LIST,
		buttonPicture   : SBUxG.DEF.MSG.EDITOR_BUTTON_PICTURE,
		buttonLink      : SBUxG.DEF.MSG.EDITOR_BUTTON_LINK,
		buttonClean     : SBUxG.DEF.MSG.EDITOR_BUTTON_CLEAN,
		buttonPreview   : SBUxG.DEF.MSG.EDITOR_BUTTON_PREVIEW,

		buttonPictureMsg   : SBUxG.DEF.MSG.EDITOR_BUTTON_PICTURE_MSG,
		buttonPictureAltMsg : SBUxG.DEF.MSG.EDITOR_BUTTON_PICTURE_ALT_MSG,
		buttonLinkMsg   : SBUxG.DEF.MSG.EDITOR_BUTTON_LINK_MSG,

		storageData     : 'value'
	};

	SBUxG.DEF.SET_CONTEXT_MENU = {
		zIndex : 2000	,
		trigger : 'right',
		delay: 200,
		autoHide : true,

		jsondataId        : 'id',
		jsondataPid       : 'pid',
		jsondataOrder     : 'order',
		jsondataText      : 'text',
		jsondataValue     : 'value',
		jsondataGlyphicon : 'glyphicon',
		jsondataAccesskey : 'accesskey',
		jsondataType      : 'type'
	};


	SBUxG.DEF.SET_DATASTORE_AJAX = {
		type        : 'post',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		// contentType : 'application/json; charset=utf-8',
		dataType    : 'json',
		async       : 'true',
		cache       : 'false',
		onloadBind  : 'false',
		emptyBind   : 'false',
		/* if callback value has empty data, this properties is skip. */
		callback : '',
		/* if beforeSendCallback value has empty data, this properties is skip. */
		beforeSendCallback : '',
		/* if afterReceiveCallback value has empty data, this properties is skip. */
		afterReceiveCallback : '',
		/* if errorCallback value has empty data, this properties is skip. */
		errorCallback : '',
		/* if afterBindCallback value has empty data, this properties is skip. */
		afterBindCallback : ''
	};

}());