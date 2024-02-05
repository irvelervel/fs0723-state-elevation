import { Alert } from 'react-bootstrap'

const Detail = (props) => (
  <Alert variant="success">
    {/* prendi il valore dalle props, ovvero da App che ti passa il valore "selected" */}
    {/* al caricamento della pagina, selected in App è undefined e quindi noi mostriamo 'Nessun valore selezionato' */}
    {props.selected || 'Nessun valore selezionato'}
  </Alert>
)

export default Detail
