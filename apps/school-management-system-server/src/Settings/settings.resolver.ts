import * as graphql from "@nestjs/graphql";
import { LocaleDto } from "../settings/LocaleDto";
import { SwitchLanguageDto } from "../settings/SwitchLanguageDto";
import { SettingsService } from "./settings.service";

export class SettingsResolver {
  constructor(protected readonly service: SettingsService) {}

  @graphql.Query(() => [LocaleDto])
  async FetchLocales(
    @graphql.Args()
    args: string
  ): Promise<LocaleDto[]> {
    return this.service.FetchLocales(args);
  }

  @graphql.Mutation(() => String)
  async SwitchLanguage(
    @graphql.Args()
    args: SwitchLanguageDto
  ): Promise<string> {
    return this.service.SwitchLanguage(args);
  }
}
