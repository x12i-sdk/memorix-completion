import assert from 'node:assert/strict';
import { completeMemorixRecord } from '@x12i/memorix-completion';
const record = { recordId: 'asset-1', concept: { identifier: { kind: 'asset', id: 'asset-1' }, title: 'Demo' }, data: { label: 'Keep me' }, _system: { provenance: { source: { collection: 'assets' } } } };
const mapping = {
  name: 'asset-owner', entityType: 'asset', target: 'entity', version: '1',
  targetSelector: { sourceCollection: 'assets' }, source: { databaseName: 'fixture-db', collection: 'inventory' },
  match: { targetPath: 'recordId', sourcePath: 'id' }, writeRoot: 'data',
  fields: [{ sourcePath: 'owner', targetPath: 'owner', required: true }, { sourcePath: 'label', targetPath: 'label' }],
};
let written;
const result = await completeMemorixRecord({ sourceDatabaseName: 'fixture-db', record, mappings: [mapping],
  sourceReader: async request => { assert.equal(request.matchValue, 'asset-1'); return { id: 'asset-1', owner: 'Example team', label: 'Do not overwrite' }; },
  recordWriter: async ({ updatedData }) => { written = updatedData; },
});
assert.equal(result.status, 'completed', JSON.stringify(result));
assert.equal(written.owner, 'Example team');
assert.equal(written.label, 'Keep me');
assert.equal(record.data.owner, undefined);
console.log({ result, written });
