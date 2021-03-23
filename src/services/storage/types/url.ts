export interface StoredUrl {
	id: string
	url: string
	createdAt: string
	updatedAt: string
}

export interface UrlStorageDriver {
	get(id: string, options: { withInfo: boolean }): Promise<StoredUrl | UrlWithInformation>

	save(url: UrlRequestData): Promise<StoredUrl>

	edit(id: string, url: string): Promise<StoredUrl>

	delete(id: string): Promise<void | number>

	deleteOverdue(timespanMs: number): Promise<number>

	incVisitCount(id: string): Promise<void>

	incInfoCount(id: string): Promise<void>
}

export interface UrlRequestData {
	url: string
	id?: string
	ip: string
}

export interface UrlInformation {
	ip: string
	urlVisitCount: number
	infoVisitCount: number
	lastUsed: string
}
export type UrlWithInformation = StoredUrl & UrlInformation
