/*
 * 컴포넌트 기본값 설정
 */
(function (){
	SBUxG.DEF.SET_SBGRID_2_5 = {
		attributeType : {
			0: 'string',
			1: 'bool',
			2: 'number',
			3: 'function',
			4: 'array',
			5: 'objarray',
			6: 'object'
		}, // 복합적인 경우는 공백

		//************************
		// string type 인 경우
		// 예) "20px" 이나 "20" 이나 제품 스펙에 따라 변환되어
		// 맞게 적용되니 상관없이 사용.
		//************************

		// attribute 속성, 주의사항 이름에 data- 는 bootstrap 에서 사용하기 때문에 사용금지함.
		attributes : [
			{oldName : 'strJsonRef', 				newName : 'jsonref',				def  : undefined, type : 'string' },
			{oldName : 'strCaption', 				newName : 'caption', 				def  : undefined, type : 'string' },
			{oldName : 'strColWidth', 				newName : 'colwidth', 				def  : undefined, type : 'string' },
			{oldName : 'strRowHeader', 				newName : 'rowheader', 				def  : undefined, type : 'string' },
			{oldName : 'strExplorerbar', 			newName : 'explorerbar', 			def  : undefined, type : 'string' },
			{oldName : 'strSelectMode',				newName : 'selectmode', 			def  : undefined, type : 'string' },
			{oldName : 'strEmptyRecords', 			newName : 'emptyrecords', 			def  : undefined, type : 'string' },
			{oldName : 'strEmptyRecordsFontStyle', 	newName : 'emptyrecordsfontstyle', 	def  : undefined, type : 'string' },
			{oldName : 'strMergeCellsFixedRows', 	newName : 'mergecellsfixedrows', 	def  : undefined, type : 'string' },
			{oldName : 'strMergeCells', 			newName : 'mergecells', 			def  : undefined, type : 'string' },
			{oldName : 'strBackColorAlternate', 	newName : 'backcoloralternate', 	def  : undefined, type : 'string' },
			{oldName : 'strHiddenParentIds', 		newName : 'hiddenparentids', 		def  : undefined, type : 'string' },
			{oldName : 'nAlternateCycle', 			newName : 'alternatecycle', 		def  : undefined, type : 'number' },
			{oldName : 'nFixedCols', 				newName : 'fixedcols', 				def  : undefined, type : 'number' },
			{oldName : 'nFrozenCols', 				newName : 'frozencols', 			def  : undefined, type : 'number' },
			{oldName : 'strRowHeight', 				newName : 'fixedrowheight', 		def  : undefined, type : 'number' },
			{oldName : 'strDataHeight', 			newName : 'rowheight', 				def  : undefined, type : 'number' },
			{oldName : 'nMaxWheelCount', 			newName : 'maxwheelcount', 			def  : undefined, type : 'number' },
			{oldName : 'bToolTip', 					newName : 'tooltip', 				def  : undefined, type : 'bool' },
			{oldName : 'bAllowUserResize', 			newName : 'allowuserresize', 		def  : undefined, type : 'bool' },
			{oldName : 'bGroupingMove', 			newName : 'groupingmove', 			def  : undefined, type : 'bool' },
			{oldName : 'bAutoMerge', 				newName : 'automerge', 				def  : undefined, type : 'bool' },
			{oldName : 'bUseMultiSorting', 			newName : 'usemultisorting', 		def  : undefined, type : 'bool' },

			/* 2016-06-24 추가 */
			{oldName : 'nFixedRows', 				newName : 'fixedrows', 				def  : undefined, type : 'number' },
			{oldName : 'nFrozenRows', 				newName : 'frozenrows', 			def  : undefined, type : 'number' },
			{oldName : 'nFrozenBottomRows', 		newName : 'frozenbottomrows', 		def  : undefined, type : 'number' },

			{oldName : 'bAllowCopy', 				newName : 'allowcopy', 				def  : undefined, type : 'bool' },
			{oldName : 'bAllowPaste', 				newName : 'allowpaste', 			def  : undefined, type : 'bool' },
			{oldName : 'rowdragmove', 				newName : 'rowdragmove', 			def  : undefined, type : 'bool' },

			/* 2016-06-27 추가 */
			{oldName : 'locale', 					newName : 'locale', 				def  : undefined, type : 'bool' },

			/* 2016-07-07 추가 */
			{oldName : 'strRowDataType', 			newName : 'rowdatatype',			def  : undefined, type : 'string' },
			{oldName : 'strWidth', 					newName : 'width', 					def  : undefined, type : 'string' },
			{oldName : 'strHeight', 				newName : 'height', 				def  : undefined, type : 'string' },
			{oldName : 'paging', 					newName : 'paging', 				def  : undefined, type : 'object' },

			/* 2016-07-11 추가 */
			{oldName : 'nResizingInterval',			newName : 'resizinginterval', 		def  : undefined, type : 'number' },

			/* 2016-09-09 추가 */
			{oldName : 'showscrollinfo',			newName : 'showscrollinfo', 		def  : undefined, type : 'object' },

			/* 2016-09-29 추가 */
			{oldName : 'checkvalue',				newName: 'checkvalue',				def: undefined,	type: 'string' },

			/* 2016-11-09  */
			{oldName : 'bOneClickEdit',				newName: 'oneclickedit',			def: undefined,	type: 'bool' },

			/* 2016-11-11  */
			{oldName : 'bEllipsis',					newName: 'ellipsis', 				def: undefined, type: 'bool' },

			/* 2016-12-07  */
			{oldName : 'bAllowSelection',			newName: 'allowselection',			def: undefined,	type: 'bool' },

			/* 2017-01-16  */
			{oldName : 'bDisabled',					newName: 'disabled',				def: undefined,	type: 'bool' },
			{oldName : 'bAllowSelection',			newName: 'allowselection', 			def: undefined,	type: 'bool' },
			{oldName : 'waitingui',					newName: 'waitingui',				def: undefined,	type: 'bool' },
			{oldName : 'filtering',					newName: 'filtering',				def: undefined,	type: 'bool' },

			/* 2017-03-08 수정  */
			{oldName : 'contextmenu',               newName : 'contextmenu',            def: undefined, type : 'bool' },
			{oldName : 'contextmenulist',           newName : 'contextmenulist',        def: undefined, type : 'object' },

			 /* 2017-09-06 수정  */
		    {oldName : 'bDataMergeFalseSkip',       newName : 'datamergefalseskip',     def: undefined, type : 'bool' },
		    {oldName : 'strDataReplace',            newName : 'datareplace',            def: undefined, type : 'string' },
		    {oldName : 'autosavepsnldata',          newName : 'autosavepsnldata',       def: undefined, type : 'string' },
		    {oldName : 'psnldataid',                newName : 'psnldataid ',            def: undefined, type : 'string' },

            /* 2018-06-15 수정 */
            {oldName : 'updatepastestatus',         newName : 'updatepastestatus',      def: undefined, type : 'bool' },
			{oldName : 'hiddencopynpaste',          newName : 'hiddencopynpaste',       def: undefined, type : 'bool' },

			/* 2018-01-08 수정 */
			{oldName : 'removewhitespace',          newName : 'removewhitespace',       def: undefined, type : 'bool' },

			/* 2018-08-08 수정 */
			{oldName : 'showselectedcellsinfo',     newName : 'showselectedcellsinfo',  def: undefined, type : 'array' },
			{oldName : 'showtotalrows',     		newName : 'showtotalrows', 			def: undefined, type : 'bool' },
			{oldName : 'emptycellonpaste',     		newName : 'emptycellonpaste', 		def: undefined, type : 'bool' },

			// 전체 그리드 영향부
			{oldName : 'strStyle', 					newName : 'style', 					def  : undefined, type : 'string' }
			// style 은 고정명칭을 사용하도록 한다.
			// 2.5 버전에서는 style 이 삭제되었지만, SBUx 구조상 div tag 를 만들어 주기 때문에 style을 고정하여 입력할 수 있도록 한다.
			//{ oldName : 'style'             , newName : 'grid-style'                   , def  : undefined, type : '' },
		],
		// id , text, width, type, ref, style 은 변경 불가 요소임으로 대상이 아닙니다.
		columns :   [
			{oldName : 'datatype', 					newName : 'datatype', 				def  : undefined, type : 'string' },
			{oldName : 'renderer',					newName : 'renderer', 				def  : undefined, type : 'function' },
			{oldName : 'fixedRenderer', 			newName : 'fixedrenderer', 			def  : undefined, type : 'function' },
			{oldName : 'afterRenderer', 			newName : 'afterrenderer', 			def  : undefined, type : 'function' },
			{oldName : 'format', 					newName : 'format', 				def  : undefined, type : '' },
			{oldName : 'bIsColHidden', 				newName : 'hidden', 				def  : undefined, type : 'bool' },

			/* 2016-06-24 추가 */
			{oldName : 'maxlength', 				newName : 'maxlength', 				def  : undefined, type : 'number' },
			{oldName : 'autonext',					newName : 'autonext', 				def  : undefined, type : 'bool' },
			{oldName : 'round', 					newName : 'round', 					def  : undefined, type : '' },
			{oldName : 'roundMode', 				newName : 'roundmode', 				def  : undefined, type : 'string' },
			{oldName : 'roundPosition', 			newName : 'roundposition', 			def  : undefined, type : 'number' },

			/* 2016-08-08 추가*/
			{oldName : 'formatType', 				newName : 'formattype', 			def  : undefined, type : 'string' },
			{oldName : 'formatRule', 				newName : 'formatrule', 			def  : undefined, type : 'string' },

			/*2016-09-29 추가*/
			{oldName : 'checkvalue', 				newName : 'checkvalue', 			def  : undefined, type : 'string' },
			{oldName : 'linefeed' , 				newName : 'linefeed', 				def  : undefined, type : 'string' },

			/* 2016-11-29 추가*/
			{oldName : 'bDataMerge', 				newName : 'merge', 				def  : undefined, type : 'bool' },

			/* 2017-01-16  */
			{oldName : 'filtering',					newName: 'filtering',				def: undefined,	type: '' },

			/* 2017-01-20  */
			{oldName : 'fixedstyle', 				newName : 'fixedstyle', 			def  : undefined, type : 'string' },
			{oldName : 'typeinfo', 					newName : 'typeinfo', 				def  : undefined, type : '' },

            /* 2018-06-15 */
			{oldName : 'yearrange', 			    newName : 'yearrange', 			def  : undefined, type : 'number' },

			/* 2018-10-01 */
			{oldName : 'skippaste', 			    newName : 'skippaste', 			def  : undefined, type : 'bool' }

		],
		export_excel : [
             { oldName : 'strFileName',						newName : 'strFileName',   				def  : undefined, type : 'string' },
             { oldName : 'strAction', 						newName : 'strAction',					def  : undefined, type : 'string' },
             { oldName : 'objTitleInfo', 					newName : 'objTitleInfo',				def  : undefined, type : 'objarray' },
             { oldName : 'bIsMerge', 						newName : 'bIsMerge',					def  : undefined, type : 'bool' },
             { oldName : 'bUseFormat', 						newName : 'bUseFormat',					def  : undefined, type : 'bool' },
             { oldName : 'bIsStyle',					 	newName : 'bIsStyle',					def  : undefined, type : 'bool' },
             { oldName : 'bUseCompress ',					newName : 'bUseCompress ',				def  : undefined, type : 'bool' },
             { oldName : 'bIncludeData', 					newName : 'bIncludeData',   			def  : undefined, type : 'bool' },
             { oldName : 'bAutoResize', 					newName : 'bAutoResize',				def  : undefined, type : 'bool' },
             { oldName : 'bUseSeq', 						newName : 'bUseSeq',   					def  : undefined, type : 'bool' },
             { oldName : 'arrAutoResizeCols', 				newName : 'arrAutoResizeCols',			def  : undefined, type : 'array' },
             { oldName : 'arrRemoveCols', 					newName : 'arrRemoveCols',  			def  : undefined, type : 'array' },
             { oldName : 'arrSkipMergeCols', 				newName : 'arrSkipMergeCols',  			def  : undefined, type : 'array' },
             { oldName : 'arrNumberTypeCols', 				newName : 'arrNumberTypeCols',  		def  : undefined, type : 'array' },
             { oldName : 'bSaveComboLabel', 				newName : 'bSaveComboLabel',			def  : undefined, type : 'bool' },
             { oldName : 'bIncludeSubtotal',				newName : 'bIncludeSubtotal',			def  : undefined, type : 'bool' },
             { oldName : 'arrAdditionalParam', 				newName : 'arrAdditionalParam',			def  : undefined, type : 'objarray' }
		]
	};
}());