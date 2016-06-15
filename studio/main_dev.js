import Studio from 'jsreport-studio'
import 'brace/mode/ejs'

Studio.templateEditorModeResolvers.push((template) => template.engine === 'ejs' ? 'ejs' : null)
