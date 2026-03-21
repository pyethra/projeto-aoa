import "../styles/BotaoFiltro-styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function BotaoFiltro({
  tituloPadrao,
  valorSelecionado,
  opcoes,
  onSelecionar,
  renderLabel,
}) {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={valorSelecionado ? renderLabel(valorSelecionado) : tituloPadrao}
      >
        {opcoes.map((opcao) => (
          <Dropdown.Item
            key={opcao}
            onClick={() => onSelecionar(opcao)}
            className="dropdown-menu"
          >
            {renderLabel(opcao)}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
