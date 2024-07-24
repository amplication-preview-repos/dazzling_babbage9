import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SettingsService } from "./settings.service";
import { SwitchLanguageDto } from "../settings/SwitchLanguageDto";
import { LocaleDto } from "../settings/LocaleDto";

@swagger.ApiTags("settings")
@common.Controller("settings")
export class SettingsController {
  constructor(protected readonly service: SettingsService) {}

  @common.Get("/locales")
  @swagger.ApiOkResponse({
    type: LocaleDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchLocales(
    @common.Body()
    body: SwitchLanguageDto
  ): Promise<LocaleDto[]> {
        return this.service.FetchLocales(body);
      }

  @common.Post("/language")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SwitchLanguage(
    @common.Body()
    body: SwitchLanguageDto
  ): Promise<string> {
        return this.service.SwitchLanguage(body);
      }
}
