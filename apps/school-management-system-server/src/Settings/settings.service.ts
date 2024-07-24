import { Injectable } from "@nestjs/common";
import { LocaleDto } from "../settings/LocaleDto";
import { SwitchLanguageDto } from "../settings/SwitchLanguageDto";

@Injectable()
export class SettingsService {
  constructor() {}
  async FetchLocales(args: string): Promise<LocaleDto[]> {
    throw new Error("Not implemented");
  }
  async SwitchLanguage(args: SwitchLanguageDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
