export interface Carteira {
  periodo:          Periodo;
  beneficiario:     Beneficiario;
  categoriaDespesa: CategoriaDespesa[];
  operadora:        Operadora;
}

export interface Beneficiario {
  registroAnsPlano: string;
  cartao:           string;
  CNS:              string;
  nomePlano:        string;
  nome:             string;
}

export interface CategoriaDespesa {
  quantidade: number;
  prestador?: Prestador[];
  valorTotal: number;
  descricao:  string;
}

export interface Prestador {
  procedimento:  Array<ProcedimentoClass[] | ProcedimentoClass>;
  cnpjcpf:       string;
  municipio:     string;
  profissao:     null | string;
  nome:          string;
  nomeFantasia?: string;
}

export interface ProcedimentoClass {
  quantidade:   number;
  procedimento: string;
  realizacao:   Date;
  descricao:    string;
}

export interface Operadora {
  registroAns:  number;
  nomeFantasia: string;
}

export interface Periodo {
  inicio: string;
  fim:    string;
}
