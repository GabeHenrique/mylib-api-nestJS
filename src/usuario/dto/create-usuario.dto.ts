import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

  @ApiProperty()
  id: number;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  senha: string;
  @ApiProperty()
  telefone: string;
}
