import { CharId } from "types"
import { settings } from "./settings"

export type GalleryImg = {
  img: string,
  path: string,
  route?: CharId,
  sensitive?: boolean,
  alternativeOf?: string,
  source?: "unused" | "half-moon"
}

export const GALLERY_IMAGES: Record<string, GalleryImg> = {
  "ark_e01" : { img: "ark_e01" , path: "event", route: "ark" },
  "ark_e02" : { img: "ark_e02" , path: "event", route: "ark" },
  "ark_e03" : { img: "ark_e03" , path: "event", route: "ark" },
  "ark_e04" : { img: "ark_e04" , path: "event", route: "ark" },
  "ark_e04b": { img: "ark_e04b", path: "event", route: "ark", alternativeOf: "ark_e04" },
  "ark_e08" : { img: "ark_e08" , path: "event", route: "ark" },
  "ark_e09" : { img: "ark_e09" , path: "event", route: "ark" },
  "ark_e05a": { img: "ark_e05a", path: "event", route: "ark" },
  "ark_e05b": { img: "ark_e05b", path: "event", route: "ark", alternativeOf: "ark_e05a" },
  "ark_e06a": { img: "ark_e06a", path: "event", route: "ark" },
  "ark_e06b": { img: "ark_e06b", path: "event", route: "ark", alternativeOf: "ark_e06a" },
  "ark_e07" : { img: "ark_e07" , path: "event", route: "ark" },
  "ark_f01" : { img: "ark_f01" , path: "event", route: "ark" },
  "ark_f02" : { img: "ark_f02" , path: "event", route: "ark", alternativeOf: "ark_f01" },
  "ark_f03" : { img: "ark_f03" , path: "event", route: "ark" },
  "nero_e04": { img: "nero_e04", path: "event", route: "ark" },
  "cmo_06b" : { img: "cmo_06b" , path: "bg"   , route: "ark" },
  "ark_e10" : { img: "ark_e10" , path: "event", route: "ark" },
  "ark_h01" : { img: "ark_h01" , path: "event", route: "ark", sensitive: true },
  "ark_h02" : { img: "ark_h02" , path: "event", route: "ark", sensitive: true },
  "ark_h03" : { img: "ark_h03" , path: "event", route: "ark", sensitive: true },
  "ark_h04" : { img: "ark_h04" , path: "event", route: "ark", sensitive: true },
  "ark_h05" : { img: "ark_h05" , path: "event", route: "ark" },
  "ark_h06" : { img: "ark_h06" , path: "event", route: "ark", sensitive: true },
  "ark_h07" : { img: "ark_h07" , path: "event", route: "ark", sensitive: true },
  "ark_h08" : { img: "ark_h08" , path: "event", route: "ark", sensitive: true },
  "ark_h09" : { img: "ark_h09" , path: "event", route: "ark", sensitive: true },
  "ark_h10" : { img: "ark_h10" , path: "event", route: "ark", sensitive: true },
  "ark_h10b": { img: "ark_h10b", path: "event", route: "ark", sensitive: true, alternativeOf: "ark_h10", source: "unused" },
  "ark_h11" : { img: "ark_h11" , path: "event", route: "ark", sensitive: true },
  "ark_h12" : { img: "ark_h12" , path: "event", route: "ark", sensitive: true },
  "ark_h13" : { img: "ark_h13" , path: "event", route: "ark", sensitive: true },

  "cel_e01" : { img: "cel_e01" , path: "event", route: "cel" },
  "cel_e02a": { img: "cel_e02a", path: "event", route: "cel" },
  "cel_e02b": { img: "cel_e02b", path: "event", route: "cel", alternativeOf: "cel_e02a" },
  "cel_e03a": { img: "cel_e03a", path: "event", route: "cel" },
  "cel_e03b": { img: "cel_e03b", path: "event", route: "cel", alternativeOf: "cel_e03a" },
  "cel_e04" : { img: "cel_e04" , path: "event", route: "cel" },
  "cel_e05a": { img: "cel_e05a", path: "event", route: "cel" },
  "cel_e05b": { img: "cel_e05b", path: "event", route: "cel", alternativeOf: "cel_e05a" },
  "cel_e09" : { img: "cel_e09" , path: "event", route: "cel" },
  "cel_e06b": { img: "cel_e06b", path: "event", route: "cel" },
  "cel_e06a": { img: "cel_e06a", path: "event", route: "cel", alternativeOf: "cel_e06b" },
  "cel_e07a": { img: "cel_e07a", path: "event", route: "cel" },
  "cel_e07b": { img: "cel_e07b", path: "event", route: "cel", alternativeOf: "cel_e07a" },
  "cel_e07c": { img: "cel_e07c", path: "event", route: "cel", alternativeOf: "cel_e07a", source: "unused" },
  "cel_e08" : { img: "cel_e08" , path: "event", route: "cel" },
  "cel_f01" : { img: "cel_f01" , path: "event", route: "cel" },
  "cel_f01b": { img: "cel_f01b", path: "event", route: "cel", alternativeOf: "cel_f01" },
  "cel_f02" : { img: "cel_f02" , path: "event", route: "cel", alternativeOf: "cel_f01" },
  "cmo_01"  : { img: "cmo_01"  , path: "bg"   , route: "cel" },
  "cmo_02"  : { img: "cmo_02"  , path: "bg"   , route: "cel" },
  "cmo_03"  : { img: "cmo_03"  , path: "bg"   , route: "cel" },
  "cmo_04a" : { img: "cmo_04a" , path: "bg"   , route: "cel" },
  "cel_h01" : { img: "cel_h01" , path: "event", route: "cel", sensitive: true },
  "cel_h02" : { img: "cel_h02" , path: "event", route: "cel", sensitive: true },
  "cel_h03a": { img: "cel_h03a", path: "event", route: "cel", sensitive: true },
  "cel_h03b": { img: "cel_h03b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h03a" },
  "cel_h04a": { img: "cel_h04a", path: "event", route: "cel", sensitive: true },
  "cel_h04b": { img: "cel_h04b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h04a" },
  "cel_h05a": { img: "cel_h05a", path: "event", route: "cel", sensitive: true },
  "cel_h05b": { img: "cel_h05b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h05a" },
  "cel_h06a": { img: "cel_h06a", path: "event", route: "cel", sensitive: true },
  "cel_h06b": { img: "cel_h06b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h06a" },
  "cel_h07a": { img: "cel_h07a", path: "event", route: "cel", sensitive: true },
  "cel_h07b": { img: "cel_h07b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h07a" },
  "cel_h08a": { img: "cel_h08a", path: "event", route: "cel", sensitive: true },
  "cel_h08b": { img: "cel_h08b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h08a" },
  "cel_h11a": { img: "cel_h11a", path: "event", route: "cel", sensitive: true },
  "cel_h11b": { img: "cel_h11b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h11a" },
  "cel_h09a": { img: "cel_h09a", path: "event", route: "cel", sensitive: true },
  "cel_h09b": { img: "cel_h09b", path: "event", route: "cel", sensitive: true, alternativeOf: "cel_h09a" },
  "cel_h10" : { img: "cel_h10" , path: "event", route: "cel", sensitive: true },

  "aki_e01" : { img: "aki_e01" , path: "event", route: "aki", alternativeOf: "aki_e01b" },
  "aki_e01b": { img: "aki_e01b", path: "event", route: "aki" },
  "aki_e07a": { img: "aki_e07a", path: "event", route: "aki" },
  "aki_e07b": { img: "aki_e07b", path: "event", route: "aki", alternativeOf: "aki_e07a" },
  "aki_e02" : { img: "aki_e02" , path: "event", route: "aki" },
  "aki_e03" : { img: "aki_e03" , path: "event", route: "aki" },
  "aki_e09" : { img: "aki_e09" , path: "event", route: "aki" },
  "aki_e08" : { img: "aki_e08" , path: "event", route: "aki" },
  "aki_e04b": { img: "aki_e04b", path: "event", route: "aki" },
  "aki_e04" : { img: "aki_e04" , path: "event", route: "aki", alternativeOf: "aki_e04b" },
  "aki_e05a": { img: "aki_e05a", path: "event", route: "aki" },
  "aki_e05b": { img: "aki_e05b", path: "event", route: "aki", alternativeOf: "aki_e05a" },
  "aki_e06" : { img: "aki_e06" , path: "event", route: "aki" },
  "aki_f01" : { img: "aki_f01" , path: "event", route: "aki" },
  "aki_f02" : { img: "aki_f02" , path: "event", route: "aki" },
  "stk_e01a": { img: "stk_e01a", path: "event", route: "aki" },
  "stk_e01b": { img: "stk_e01b", path: "event", route: "aki", alternativeOf: "stk_e01a" },
  "stk_e01c": { img: "stk_e01c", path: "event", route: "aki", alternativeOf: "stk_e01a" },
  "stk_e01d": { img: "stk_e01d", path: "event", route: "aki", alternativeOf: "stk_e01a" },
  "stk_e02" : { img: "stk_e02" , path: "event", route: "aki" },
  "stk_e03" : { img: "stk_e03" , path: "event", route: "aki" },
  "aki_h14" : { img: "aki_h14" , path: "event", route: "aki" },
  "aki_h15" : { img: "aki_h15" , path: "event", route: "aki", sensitive: true },
  "aki_h01" : { img: "aki_h01" , path: "event", route: "aki" },
  "aki_h02" : { img: "aki_h02" , path: "event", route: "aki", sensitive: true },
  "aki_h03" : { img: "aki_h03" , path: "event", route: "aki", sensitive: true },
  "aki_h04" : { img: "aki_h04" , path: "event", route: "aki", sensitive: true },
  "aki_h05" : { img: "aki_h05" , path: "event", route: "aki", sensitive: true },
  "aki_h06" : { img: "aki_h06" , path: "event", route: "aki", sensitive: true },
  "aki_h07" : { img: "aki_h07" , path: "event", route: "aki", sensitive: true },
  "aki_h08" : { img: "aki_h08" , path: "event", route: "aki", sensitive: true },
  "aki_h09" : { img: "aki_h09" , path: "event", route: "aki", sensitive: true },
  "aki_h10" : { img: "aki_h10" , path: "event", route: "aki", sensitive: true },
  "aki_h11" : { img: "aki_h11" , path: "event", route: "aki", sensitive: true },
  "aki_h12" : { img: "aki_h12" , path: "event", route: "aki", sensitive: true },
  "aki_h13" : { img: "aki_h13" , path: "event", route: "aki", sensitive: true },

  "his_e01" : { img: "his_e01" , path: "event", route: "his", alternativeOf: "his_e01b" },
  "his_e01b": { img: "his_e01b", path: "event", route: "his" },
  "his_e02" : { img: "his_e02" , path: "event", route: "his", alternativeOf: "his_e02b" },
  "his_e02b": { img: "his_e02b", path: "event", route: "his" },
  "his_e02b2":{ img: "his_e02b2",path: "event", route: "his", alternativeOf: "his_e02b", source: "unused" },
  "his_e08" : { img: "his_e08" , path: "event", route: "his" },  
  "his_e03" : { img: "his_e03" , path: "event", route: "his" },
  "his_e04" : { img: "his_e04" , path: "event", route: "his" },
  "his_e05" : { img: "his_e05" , path: "event", route: "his" },
  "his_e09" : { img: "his_e09" , path: "event", route: "his" },  
  "his_e06" : { img: "his_e06" , path: "event", route: "his" },
  "his_e07a": { img: "his_e07a", path: "event", route: "his" },
  "his_e07b": { img: "his_e07b", path: "event", route: "his", alternativeOf: "his_e07a" },
  "his_f01" : { img: "his_f01" , path: "event", route: "his" },
  "his_f02" : { img: "his_f02" , path: "event", route: "his" },
  "his_f03" : { img: "his_f03" , path: "event", route: "his" },
  "hal_e01" : { img: "hal_e01" , path: "event", route: "his" },
  "his_h16" : { img: "his_h16" , path: "event", route: "his", sensitive: true },
  "his_h15" : { img: "his_h15" , path: "event", route: "his", sensitive: true },
  "his_h01" : { img: "his_h01" , path: "event", route: "his", sensitive: true, alternativeOf: "his_h02" },
  "his_h02" : { img: "his_h02" , path: "event", route: "his", sensitive: true },
  "his_h03" : { img: "his_h03" , path: "event", route: "his", sensitive: true },
  "his_h04a": { img: "his_h04a", path: "event", route: "his", sensitive: true },
  "his_h04b": { img: "his_h04b", path: "event", route: "his", sensitive: true, alternativeOf: "his_h04a" },
  "his_h12" : { img: "his_h12" , path: "event", route: "his", sensitive: true },
  "his_h13" : { img: "his_h13" , path: "event", route: "his", sensitive: true },
  "his_h05" : { img: "his_h05" , path: "event", route: "his", sensitive: true },
  "his_h06" : { img: "his_h06" , path: "event", route: "his", sensitive: true },
  "his_h06b": { img: "his_h06b", path: "event", route: "his", sensitive: true, alternativeOf: "his_h06" },
  "his_h07" : { img: "his_h07" , path: "event", route: "his", sensitive: true },
  "his_h08" : { img: "his_h08" , path: "event", route: "his", sensitive: true },
  "his_h09" : { img: "his_h09" , path: "event", route: "his", sensitive: true },
  "his_h10" : { img: "his_h10" , path: "event", route: "his", sensitive: true },
  "his_h11" : { img: "his_h11" , path: "event", route: "his", sensitive: true },
  "his_h14" : { img: "his_h14" , path: "event", route: "his", sensitive: true },

  "koha_e01a":{ img: "koha_e01a",path: "event", route: "koha" },
  "koha_e01b":{ img: "koha_e01b",path: "event", route: "koha", alternativeOf: "koha_e01a" },
  "koha_e02": { img: "koha_e02", path: "event", route: "koha" },
  "koha_e03": { img: "koha_e03", path: "event", route: "koha" },
  "koha_e04": { img: "koha_e04", path: "event", route: "koha" },
  "koha_e05": { img: "koha_e05", path: "event", route: "koha" },
  "koha_e06": { img: "koha_e06", path: "event", route: "koha" },
  "koha_e07": { img: "koha_e07", path: "event", route: "koha", sensitive: true },
  "koha_e08": { img: "koha_e08", path: "event", route: "koha" },
  "koha_f01": { img: "koha_f01", path: "event", route: "koha" },
  "koha_f01b":{ img: "koha_f01b",path: "event", route: "koha", alternativeOf: "koha_f01" },
  "ao_01"   : { img: "ao_01"   , path: "event", route: "koha" },
  "ao_02"   : { img: "ao_02"   , path: "event", route: "koha" },
  "koha_h10": { img: "koha_h10", path: "event", route: "koha", sensitive: true },
  "koha_h10b":{ img: "koha_h10b",path: "event", route: "koha", sensitive: true, alternativeOf: "koha_h10" },
  "koha_h11": { img: "koha_h11", path: "event", route: "koha", sensitive: true },
  "koha_h01": { img: "koha_h01", path: "event", route: "koha", sensitive: true },
  "koha_h02": { img: "koha_h02", path: "event", route: "koha", sensitive: true },
  "koha_h03": { img: "koha_h03", path: "event", route: "koha", sensitive: true },
  "koha_h04": { img: "koha_h04", path: "event", route: "koha", sensitive: true },
  "koha_h05": { img: "koha_h05", path: "event", route: "koha", sensitive: true },
  "koha_h06b":{ img: "koha_h06b",path: "event", route: "koha", sensitive: true },
  "koha_h06a":{ img: "koha_h06a",path: "event", route: "koha", sensitive: true, alternativeOf: "koha_h06b" },
  "koha_h07": { img: "koha_h07", path: "event", route: "koha", sensitive: true },
  "koha_h08": { img: "koha_h08", path: "event", route: "koha", sensitive: true },

  "hm_aki02": { img: "hm_aki02", path: "half-moon", sensitive: true, alternativeOf: "aki_h02", source: "half-moon" },
  "hm_cmo_01": { img: "hm_cmo_01", path: "half-moon", alternativeOf: "cmo_01", source: "half-moon" },
  "hm_cmo_02": { img: "hm_cmo_02", path: "half-moon", alternativeOf: "cmo_02", source: "half-moon" },
  "hm_his01": { img: "hm_his01", path: "half-moon", alternativeOf: "his_e04", source: "half-moon" },
  "hm_his02": { img: "hm_his02", path: "half-moon", sensitive: true, alternativeOf: "his_h03", source: "half-moon" },
}

type GalleryImageKey = keyof typeof GALLERY_IMAGES
export const UNLOCK_TOGETHER: Record<GalleryImageKey, GalleryImageKey[]> = {
  "ark_h10": ["ark_h10b"],
  "cel_e07b": ["cel_e07c"],
  "his_e02b": ["his_e02b2"],
  "aki_h02": ["hm_aki02"],
  "cmo_01" : ["hm_cmo_01"],
  "cmo_02" : ["hm_cmo_02"],
  "his_e04": ["hm_his01"],
  "his_h03": ["hm_his02"],
}

export function shouldBlur(image: string): boolean {
	return (GALLERY_IMAGES[image]?.sensitive ?? false) && settings.blurThumbnails
}

export function findImagesByRoute(route: CharId): GalleryImg[] {
  return Object.values(GALLERY_IMAGES).filter((img) => img.route === route)
}

export function getImageVariants(imgName: string): GalleryImg[] {
  return Object.values(GALLERY_IMAGES).filter((img) => img.alternativeOf === imgName || img.img === imgName)
}

export function imagePath(imgName: string): string {
  const img = GALLERY_IMAGES[imgName]
  if (!img) return ""
  return `${img.path}/${img.img}`
}

export function imageNameFromPath(path: string): string {
  if (!path) return ""
  return path.split("/").pop() ?? ""
}

export const isImgUnlocked = (imgName: string) =>
	settings.eventImages.includes(imagePath(imgName))

export const GALLERY_IMAGES_PD: Record<string, GalleryImg> = {
  "s01" : { img: "s01" , path: "bg" },
  "s02" : { img: "s02" , path: "bg" },
  "s03" : { img: "s03" , path: "bg" },
  "s04" : { img: "s04" , path: "bg" },
  "s05" : { img: "s05" , path: "bg" },
  "s06" : { img: "s06" , path: "bg" },
  "s07" : { img: "s07" , path: "bg" },
  "s08" : { img: "s08" , path: "bg" },
  "s09" : { img: "s09" , path: "bg" },
  "s10" : { img: "s10" , path: "bg" },
  "s11" : { img: "s11" , path: "bg" },
  "s12" : { img: "s12" , path: "bg" },
  "s13" : { img: "s13" , path: "bg" },
  "s14" : { img: "s14" , path: "bg" },
  "s15" : { img: "s15" , path: "bg" },
  "s16" : { img: "s16" , path: "bg" },
  "s17" : { img: "s17" , path: "bg" , sensitive: true },
  "scroll19" : { img: "scroll19" , path: "bg" },
  "t01" : { img: "t01" , path: "bg" },
  "t02" : { img: "t02" , path: "bg" },
  "t03" : { img: "t03" , path: "bg" },
  "t04" : { img: "t04" , path: "bg" },
  "t05" : { img: "t05" , path: "bg" },
  "t06" : { img: "t06" , path: "bg" },
  "t07" : { img: "t07" , path: "bg" },
}
export function imagePathPd(imgName: string): string {
  const img = GALLERY_IMAGES_PD[imgName]
  if (!img) {
    return ""
  }
  return `${img.path}/${img.img}`
}