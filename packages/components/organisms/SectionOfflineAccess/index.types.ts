export interface SectionOfflineAccessProps {
  /**
   * Module is downloaded for offline use.
   */
  downloaded: boolean;

  /**
   * Download is currently in progress.
   */
  downloading?: boolean;

  /**
   * Download progress (0–100).
   */
  downloadProgress?: number;

  /**
   * A newer version is available for the downloaded module.
   */
  updateAvailable?: boolean;

  /**
   * Update message body (e.g. "Version 2.1 is now available").
   */
  updateMessage?: string;

  /**
   * Changelog lines shown in the update card.
   */
  changelog?: string[];

  /**
   * Label for the update button (e.g. "Update to v2.1").
   */
  updateLabel?: string;

  /**
   * Download handler.
   */
  onDownloadPress?: () => void;

  /**
   * Delete handler.
   */
  onDeletePress?: () => void;

  /**
   * Update handler.
   */
  onUpdatePress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
