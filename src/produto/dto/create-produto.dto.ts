import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutoDto {

  @ApiProperty()
  id: number;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  quantidade: number;
  @ApiProperty()
  precoFabrica: number;
  @ApiProperty()
  precoVenda: number;
  @ApiProperty()
  descricao: string;
  @ApiProperty()
  consideraEstoque: boolean
  @ApiProperty()
  ativo: boolean
}
